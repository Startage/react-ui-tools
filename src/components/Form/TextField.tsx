import React from 'react';
import { Field } from 'formik';
import t from 'typy';

import { BaseField } from './BaseField';
import { MaskField } from './MasksField';
import { CurrencyField } from './CurrencyField';


interface TextFieldProps {
  name: string,
  label: string,
  children: React.ReactNode,
  mask?: 'phone' | 'cpfCnpj' | 'cpf' | 'cnpj' | 'cep' | object[],
  select?: boolean,
  currency?: boolean,
}

const TextField = ({
  name,
  label,
  children,
  mask,
  currency,
  select,
  ...others
}: TextFieldProps) => (
    <Field name={name}>
    {
      ({ field, form }: any) => {
        const hasError = t(form.errors, name).safeObject
          && t(form.touched, name).safeObject;
        const errorMessage = t(form.errors, name).safeObject;

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
