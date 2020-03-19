import React from 'react';
import { Field } from 'formik';
import t from 'typy';

import {
  BaseTextFieldProps,
} from '@material-ui/core';

import { BaseField } from './BaseField';
import { MaskField } from './MasksField';
import { CurrencyField } from './CurrencyField';

export interface TextFieldProps extends BaseTextFieldProps {
  name: string,
  label: React.ReactNode,
  id?: string,
  type?: 'text' | 'number' | 'hidden' | 'password' | 'date' | 'datetime-local' | 'tel' | 'time' | 'url' | 'week' | 'month' | 'email' | 'search',
  children?: React.ReactNode,
  mask?: 'phone' | 'cpfCnpj' | 'cpf' | 'cnpj' | 'cep' | object[],
  select?: boolean,
  currency?: boolean,
  fullWidth?: boolean,
  startAdornment?: React.ReactNode,
  endAdornment?: React.ReactNode,
  className?: string,
  onChange?: (e: any) => void,
  onBlur?: (e: any) => void,
  onFocus?: (e: any) => void,
  readOnly?: boolean,
  disabled?: boolean
}

const TextField = ({
  name,
  label,
  children,
  mask,
  currency,
  select,
  className,
  ...others
}: TextFieldProps) => (
    <Field name={name}>
    {
      ({ field, form }: any) => {
        const hasError = t(form.errors, name).safeObject
          && t(form.touched, name).safeObject;
        const errorMessage = hasError ? t(form.errors, name).safeObject : '';

        let inputComponent;

        if (mask) {
          inputComponent = MaskField;
        }

        if (currency) {
          inputComponent = CurrencyField;
        }

        return (
          <BaseField
          label={label}
          name={name}
          field={field}
          hasError={hasError}
          errorMessage={errorMessage}
          inputComponent={inputComponent}
          mask={mask}
          select={select}
          className={className}
          {...others}
          >
            {children}
          </BaseField>
        );
      }
    }
      </Field>
);


export { TextField };
