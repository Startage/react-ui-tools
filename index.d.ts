import * as React from 'react';

export interface TextFieldProps {
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
}

declare const TextField: React.FunctionComponent<TextFieldProps>;

export interface CheckBoxItemProps {
  label: React.ReactNode
  value: string
  name: string
  color?: string
  indeterminate?: boolean
  customIcon?: React.ReactNode
  customCheckedIcon?: React.ReactNode
}

export interface CheckBoxGroupProps {
  name: React.ReactNode
  options: CheckBoxItemProps[]
  label: string
  className?: string
  inline?: boolean
}

declare const CheckBoxGroup: React.FunctionComponent<CheckBoxGroupProps>;

export interface CheckBoxProps {
  label: React.ReactNode
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
