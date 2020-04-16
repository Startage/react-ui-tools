import React from 'react';
import { Field } from 'formik';
import t from 'typy';

import {
  Autocomplete as Root, RenderGroupParams, RenderInputParams, RenderOptionState, GetTagProps,
} from '@material-ui/lab';
import { PopperProps } from '@material-ui/core/Popper';

// eslint-disable-next-line import/no-cycle
import { BaseField } from './BaseField';


interface AutocompletProps {
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

const Autocomplet: React.FunctionComponent<AutocompletProps> = ({
  options,
  getOptionLabel,
  name,
  onChange,
  ChipProps,
  closeIcon,
  clearText,
  closeText,
  disabled,
  disablePortal,
  forcePopupIcon,
  ListboxComponent,
  ListboxProps,
  loading,
  loadingText,
  noOptionsText,
  openText,
  PaperComponent,
  PopperComponent,
  popupIcon,
  renderGroup,
  renderOption,
  renderTags,
  size,
  multiple,
  filterSelectedOptions,
  freeSolo,
  ...others
}) => (
    <Field name={name}>
    {
      ({ field, form }: any) => {
        const hasError = t(form.errors, name).safeObject
          && t(form.touched, name).safeObject;
        const errorMessage = hasError ? t(form.errors, name).safeObject : '';

        return (
        <Root
            value={field.value}
            onChange={(event: any, newValue: any) => {
              field.onChange({ target: { name, value: newValue } });
              if (onChange) onChange({ target: { name, value: newValue } });
            }}
            options={options}
            getOptionLabel={getOptionLabel}
            ChipProps={ChipProps}
            closeIcon={closeIcon}
            clearText={clearText}
            closeText={closeText}
            disabled={disabled}
            disablePortal={disablePortal}
            forcePopupIcon={forcePopupIcon}
            ListboxComponent={ListboxComponent}
            ListboxProps={ListboxProps}
            loading={loading}
            loadingText={loadingText}
            noOptionsText={noOptionsText}
            openText={openText}
            PaperComponent={PaperComponent}
            PopperComponent={PopperComponent}
            popupIcon={popupIcon}
            renderGroup={renderGroup}
            renderOption={renderOption}
            renderTags={renderTags}
            size={size}
            filterSelectedOptions={filterSelectedOptions}
            multiple={multiple}
            freeSolo={freeSolo}
            renderInput={(params: any) => (<BaseField
                field={{ ...field, onChange: (e: any) => {} }}
                hasError={hasError}
                errorMessage={errorMessage}
                {...others}
                {...params}
            />)}
        />
        );
      }
    }
    </Field>
);

export { Autocomplet };
