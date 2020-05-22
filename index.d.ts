import * as React from 'react';

import {
  CheckboxProps,
  BaseTextFieldProps, PopperProps,
} from '@material-ui/core';
import {
  RenderGroupParams, RenderInputParams, RenderOptionState, GetTagProps,
} from '@material-ui/lab';

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


export interface AutocompletProps {
  options: any[];
  getOptionLabel: (params: any) => string;
  name: string;
  label: React.ReactNode;
  id?: string;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  readOnly?: boolean;
  disabled?: boolean;
  // Autocomplet Props
  ChipProps?: object;
  closeIcon?: React.ReactNode;
  clearText?: string;
  closeText?: string;
  disablePortal?: boolean;
  forcePopupIcon?: true | false | 'auto';
  ListboxComponent?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  ListboxProps?: object;
  loading?: boolean;
  loadingText?: React.ReactNode;
  noOptionsText?: React.ReactNode;
  openText?: string;
  PaperComponent?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  PopperComponent?: React.ComponentType<PopperProps>;
  popupIcon?: React.ReactNode;
  renderGroup?: (params: RenderGroupParams) => React.ReactNode;
  renderInput?: (params: RenderInputParams) => React.ReactNode;
  renderOption?: (option: any, state: RenderOptionState) => React.ReactNode;
  renderTags?: (value: any[], getTagProps: GetTagProps) => React.ReactNode;
  size?: 'small' | 'medium';
  multiple?: any;
  filterSelectedOptions?: boolean;
  freeSolo?: boolean;
}

declare const Autocomplet: React.FunctionComponent<AutocompletProps>;


export interface InputFileProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  id?: string;
  className?: string;
  multiple?: boolean;
  textDragActive?: string | React.ReactNode;
  textDrag?: string | React.ReactNode;
  label?: string;
}

declare const InputFile: React.FunctionComponent<InputFileProps>;

declare module '@startage/react-ui-tools' {
}

export {
  TextField, CheckBoxGroup, CheckBox, Autocomplet, InputFile,
};
