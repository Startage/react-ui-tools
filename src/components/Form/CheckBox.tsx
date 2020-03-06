import React from 'react';

import {
  FormControlLabel, Checkbox, FormControl, FormHelperText,
} from '@material-ui/core';

import t from 'typy';
import { Field } from 'formik';


export interface CheckBoxProps {
  label: React.ReactNode
  name: string
  color?: string
  indeterminate?: boolean
  customIcon?: React.ReactNode
  customCheckedIcon?: React.ReactNode
}

const CheckBox: React.FunctionComponent<CheckBoxProps> = ({
  label,
  name,
  color = 'primary',
  indeterminate,
  customIcon,
  customCheckedIcon,
}) => (
    <Field name={name}>
      {
          ({ field, form }: any) => {
            const hasError = t(form.errors, name).safeObject
            && t(form.touched, name).safeObject;
            const errorMessage = hasError ? t(form.errors, name).safeObject : '';

            return (
                <FormControl error={hasError} component="fieldset">
                    <FormControlLabel
                        control={(
                            <Checkbox
                                color={color}
                                checked={!!field.value}
                                icon={customIcon}
                                checkedIcon={customCheckedIcon}
                                indeterminate={indeterminate}
                                className="checkBox"
                                {...field}
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
