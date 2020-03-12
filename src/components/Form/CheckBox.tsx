import React from 'react';

import {
  FormControlLabel, Checkbox, FormControl, FormHelperText, CheckboxProps,
} from '@material-ui/core';

import t from 'typy';
import { Field } from 'formik';


export interface CheckBoxProps extends CheckboxProps {
  label: React.ReactNode
  name: string
  indeterminate?: boolean
  customIcon?: React.ReactNode
  customCheckedIcon?: React.ReactNode
  className?: string
  onChange?: (e: any) => void
}

const CheckBox: React.FunctionComponent<CheckBoxProps> = ({
  label,
  name,
  color = 'primary',
  indeterminate,
  customIcon,
  customCheckedIcon,
  className,
  onChange,
  onBlur,
  onFocus,
  ...others
}) => (
    <Field name={name}>
      {
          ({ field, form }: any) => {
            const hasError = t(form.errors, name).safeObject
            && t(form.touched, name).safeObject;
            const errorMessage = hasError ? t(form.errors, name).safeObject : '';

            return (
                <FormControl
                error={hasError}
                className={className}
                component="fieldset">
                    <FormControlLabel
                        control={(
                            <Checkbox
                                {...others}
                                color={color}
                                checked={!!field.value}
                                icon={customIcon}
                                checkedIcon={customCheckedIcon}
                                indeterminate={indeterminate}
                                className="checkBox"
                                {...field}
                                onBlur={(e) => {
                                  field.onBlur(e);
                                  if (onBlur) onBlur(e);
                                }}
                                onFocus={(e) => {
                                  field.onFocus(e);
                                  if (onFocus) onFocus(e);
                                }}
                                onChange={(e) => {
                                  field.onChange(e);
                                  if (onChange) onChange(e);
                                }}
                            />
                        )}
                        label={label}
                    />
                    <FormHelperText>{errorMessage}</FormHelperText>
                </FormControl>
            );
          }
        }
    </Field>
);

export { CheckBox };
