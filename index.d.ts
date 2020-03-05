import * as React from 'react';

export interface TextFieldProps {
  name: string,
  label: string,
  id?: string,
  type?: 'text' | 'number' | 'hidden' | 'password' | 'date' | 'datetime-local' | 'tel' | 'time' | 'url' | 'week' | 'month' | 'email' | 'search',
  children?: React.ReactNode,
  mask?: 'phone' | 'cpfCnpj' | 'cpf' | 'cnpj' | 'cep' | object[],
  select?: boolean,
  currency?: boolean,
  fullWidth?: boolean,
  startAdornment?: React.ReactNode,
  endAdornment?: React.ReactNode,
}

declare const TextField: React.FunctionComponent<TextFieldProps>;

export interface CheckBoxGroupProps {
  name: string
  options: CheckBoxItemProps[]
  label: string
  className?: string
  inline?: boolean
}

declare const CheckBoxGroup: React.FunctionComponent<CheckBoxGroupProps>;

export interface CheckBoxProps {
  label: string
  name: string
  color?: string
  indeterminate?: boolean
  customIcon?: React.ReactNode
  customCheckedIcon?: React.ReactNode
}


declare const CheckBox: React.FunctionComponent<CheckBoxProps>;

declare module '@startage/react-ui-tools' {
}

export { TextField, CheckBoxGroup, CheckBox };
