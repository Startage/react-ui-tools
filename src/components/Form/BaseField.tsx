import React, { useState } from 'react';

import {
  TextField as Input, InputAdornment,
} from '@material-ui/core';


const BaseField = ({
  label,
  type,
  id,
  startAdornment,
  endAdornment,
  fullWidth,
  children,
  select,
  field,
  inputComponent,
  mask,
  hasError,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
  className,
  readOnly,
  disabled,
  InputLabelProps = {},
  ...others
}: any) => {
  const [focused, setFocused] = useState(false);

  return (
    <Input
      size="small"
      variant='outlined'
      {...field}
      onChange={(e) => {
        field.onChange(e);
        if (onChange) onChange(e);
      }}
      onBlur={(e) => {
        if (field.onBlur) field.onBlur(e);
        if (onBlur) onBlur(e);
        setFocused(false);
      }}
      onFocus={(e) => {
        if (field.onFocus) field.onFocus(e);
        if (onFocus) onFocus(e);
        setFocused(true);
      }}
      id={id}
      fullWidth={fullWidth}
      type={type || 'text'}
      error={hasError}
      className={className}
      helperText={errorMessage}
      label={label}
      select={select}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: InputLabelProps.shrink || !!field.value || focused,
      }}
      InputProps={{
        readOnly,
        disabled,
        inputComponent,
        inputProps: { mask },
        startAdornment: startAdornment && (
          <InputAdornment position="start">
            {startAdornment}
          </InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">
            {endAdornment}
          </InputAdornment>
        ),
      }}
      {...others}
    >
      { children }
    </Input>
  );
};


export { BaseField };
