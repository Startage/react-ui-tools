import React from 'react';

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
  className,
}: any) => (
      <Input
      size="small"
      variant='outlined'
      {...field}
      id={id}
      fullWidth={fullWidth}
      type={type || 'text'}
      error={hasError}
      className={className}
      helperText={errorMessage}
      label={label}
      select={select}
      InputProps={{
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
    >
      { children }
      </Input>
);


export { BaseField };
