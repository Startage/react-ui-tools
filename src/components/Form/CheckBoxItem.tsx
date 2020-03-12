import React from 'react';

import { FormControlLabel, Checkbox, CheckboxProps } from '@material-ui/core';

import { Field } from 'formik';


export interface CheckBoxItemProps extends CheckboxProps {
  label: React.ReactNode
  value: string
  name: string
  indeterminate?: boolean
  customIcon?: React.ReactNode
  customCheckedIcon?: React.ReactNode
}

const CheckBoxItem: React.FunctionComponent<CheckBoxItemProps> = ({
  label,
  value,
  name,
  color = 'primary',
  indeterminate,
  customIcon,
  customCheckedIcon,
  ...others
}) => (
    <Field name={name}>
      {
          ({ field }: any) => (
            <FormControlLabel
            control={(
                    <Checkbox
                    {...others}
                    {...field}
                    color={color}
                    checked={field.value.includes(value)}
                    value={value}
                    icon={customIcon}
                    checkedIcon={customCheckedIcon}
                    indeterminate={indeterminate}
                    className="checkBoxItem"
                    />
                )}
                label={label}
            />
          )
        }
    </Field>
);

export { CheckBoxItem };
