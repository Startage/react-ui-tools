import React from 'react';
import { Field } from 'formik';
import t from 'typy';

import { BaseField } from './BaseField';
import { MaskField } from './MasksField';
import { CurrencyField } from './CurrencyField';


interface TextFieldProps {
  name: string,
  children: React.ReactNode,
  mask?: 'phone' | 'cpfCnpj' | 'cpf' | 'cnpj' | 'cep' | object[],
  currency?: boolean,
}

const TextField = ({
  name,
  children,
  mask,
  currency,
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
          name={name}
          field={field}
          hasError={hasError}
          errorMessage={errorMessage}
          inputComponent={inputComponent}
          mask={mask}
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
