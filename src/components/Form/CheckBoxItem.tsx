import React from 'react';

import { FormControlLabel, Checkbox } from '@material-ui/core';

import { Field } from 'formik';


export interface CheckBoxItemProps {
  label: string
  value: string
  name: string
  color?: string
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
}) => (
    <Field name={name}>
      {
          ({ field }: any) => (
            <FormControlLabel
            control={(
                    <Checkbox
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
