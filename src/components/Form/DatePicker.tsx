import React, { ReactNode } from 'react';
import { Field } from 'formik';
import t from 'typy';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { TextFieldProps } from '@material-ui/core/TextField';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { InputAdornmentProps } from '@material-ui/core';

type OnChangeEvent = {
  target: {
    name: string;
    value: string | Date | null | undefined;
  }
};

export interface DatePickerProps {
  utcValue?: boolean;
  className?: string;
  name: string;
  label: string | React.ReactNode;
  format?: string;
  openPicker?: () => void;
  onChange?: (event: OnChangeEvent) => void
  inputProps?: TextFieldProps['inputProps'];
  InputProps?: TextFieldProps['InputProps'];
  onBlur?: TextFieldProps['onBlur'];
  onFocus?: TextFieldProps['onFocus'];
  TextFieldComponent?: React.ComponentType<TextFieldProps>;
  keyboardIcon?: React.ReactNode;
  maskChar?: string;
  refuse?: RegExp;
  InputAdornmentProps?: Partial<InputAdornmentProps>;
  KeyboardButtonProps?: Partial<IconButtonProps>;
  rifmFormatter?: (str: string) => string;
  allowKeyboardControl?: boolean;
  animateYearScrolling?: boolean;
  autoOk?: boolean;
  disabled?: boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  disableToolbar?: boolean;
  emptyLabel?: string;
  inputVariant?: 'standard' | 'outlined' | 'filled';
  invalidLabel?: string;
  maxDate?: Date;
  maxDateMessage?: string;
  minDate?: Date;
  minDateMessage?: string;
  onAccept?: (date: any) => void;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  openTo?: 'date' | 'year' | 'month';
  orientation?: 'portrait' | 'landscape';
  readOnly?: boolean;
  fullWidth?: boolean;
  onError?: (err: ReactNode, value: any) => void;
  variant?: 'dialog' | 'inline' | 'static';
  views?: Array<'year' | 'date' | 'month'>;
}

const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  name,
  label,
  onChange,
  onFocus,
  onBlur,
  className,
  utcValue = true,
  fullWidth,
  ...others
}) => (
  <Field name={name}>
    {
      ({ field, form }: any) => {
        const hasError = t(form.errors, name).safeObject
          && t(form.touched, name).safeObject;
        const errorMessage = hasError ? t(form.errors, name).safeObject : '';

        return (
          <KeyboardDatePicker
            inputVariant="outlined"
            size="small"
            format="dd/MM/yyyy"
            fullWidth={fullWidth}
            margin="normal"
            className={className}
            label={label}
            name={name}
            value={field.value === '' ? null : field.value}
            error={hasError}
            helperText={errorMessage}
            onChange={(value) => {
              const event = {
                target: {
                  value: utcValue && value ? value.toISOString() : value,
                  name,
                },
              };
              field.onChange(event);
              if (onChange) onChange(event);
            }}
            onBlur={(e) => {
              if (field.onBlur) field.onBlur(e);
              if (onBlur) onBlur(e);
            }}
            onFocus={(e) => {
              if (field.onFocus) field.onFocus(e);
              if (onFocus) onFocus(e);
            }}
            {...others}
          />
        );
      }
    }
  </Field>
);

export { DatePicker };
