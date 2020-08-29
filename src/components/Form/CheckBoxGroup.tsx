import React from 'react';

import {
  FormGroup, FormHelperText, FormLabel, FormControl,
} from '@material-ui/core';

import t from 'typy';
import { FieldArray } from 'formik';

import { CheckBoxItem, CheckBoxItemProps } from './CheckBoxItem';

interface CheckBoxGroupProps {
  name: string
  options: CheckBoxItemProps[]
  label: React.ReactNode
  disabled?: boolean;
  className?: string
  inline?: boolean
}

const CheckBoxGroup: React.FunctionComponent<CheckBoxGroupProps> = ({
  name, options, label, className, inline, disabled,
}) => (
    <FieldArray
      name={name}
      render={({ form }) => {
        const hasError = t(form.errors, name).safeObject
        && t(form.touched, name).safeObject;
        const errorMessage = hasError ? t(form.errors, name).safeObject : '';

        return (
        <div className={className}>
          <FormControl
          error={hasError}
          component="fieldset"
          >
          <FormLabel component="legend">{label}</FormLabel>
          <FormGroup row={inline}>
            {
              options.map((item) => (
                <CheckBoxItem disabled={disabled} key={item.value} {...item} name={name} />
              ))
            }
          </FormGroup>
          <FormHelperText>{errorMessage}</FormHelperText>
          </FormControl>
        </div>
        );
      }}
    />
);

export { CheckBoxGroup };
