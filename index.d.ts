import * as React from 'react';

import {
  CheckboxProps,
  BaseTextFieldProps,
} from '@material-ui/core';

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

declare const TextField: React.FunctionComponent<TextFieldProps>;

export interface CheckBoxItemProps extends CheckboxProps {
  label: React.ReactNode
  value: string
  name: string
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

export interface CheckBoxProps extends CheckboxProps {
  label: React.ReactNode
  name: string
  indeterminate?: boolean
  customIcon?: React.ReactNode
  customCheckedIcon?: React.ReactNode
  className?: string,
}


declare const CheckBox: React.FunctionComponent<CheckBoxProps>;

declare module '@startage/react-ui-tools' {
}

export { TextField, CheckBoxGroup, CheckBox };
