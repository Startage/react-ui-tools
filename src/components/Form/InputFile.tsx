import React, { useCallback } from 'react';

import {
  Theme, useTheme, FormHelperText, Typography, FormLabel,
} from '@material-ui/core';

import styled from '@emotion/styled';

import { Field, useFormikContext } from 'formik';
import t from 'typy';
import { useDropzone } from 'react-dropzone';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloseIcon from '@material-ui/icons/Close';

import { contentFile } from './inputFile.style';

interface ContentFileProps {
  active: boolean;
  theme: Theme;
  hasError: boolean;
  hasLabel: boolean;
}

const ContentFile = styled.div<ContentFileProps>`${contentFile}`;

interface InputFileProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  id?: string;
  className?: string;
  multiple?: boolean;
  textDragActive?: string;
  textDrag?: string;
  label?: string;
}

const InputFile: React.FunctionComponent<InputFileProps> = ({
  name,
  id,
  className,
  multiple = true,
  textDragActive = 'Solte o arquivo aqui',
  textDrag = 'Solte seu arquivo aqui ou clique para escolher',
  label,
  onChange,
  ...others
}) => {
  const theme = useTheme();
  const { setFieldValue } = useFormikContext();

  const onDrop = useCallback((acceptedFiles) => {
    setFieldValue(name, multiple ? acceptedFiles : acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const renderName = (value: any) => {
    if (!value) return null;
    if (multiple) {
      return (
        <ul>
          {value.map((item: any, position: number) => (
            <li
              className='file-item'
              key={item.name}>
              <Typography variant='caption'>{item.name}</Typography>
              <CloseIcon
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const list = value;
                value.splice(position, 1);
                setFieldValue(name, list);
              }}
              fontSize='small' />
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div className='file-item'>
        <Typography variant='caption'>{value.name}</Typography>
        <CloseIcon
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setFieldValue(name, undefined);
          }}
          fontSize='small' />
    </div>
    );
  };

  return (
    <Field name={name}>
      {
        ({ field, form }: any) => {
          const hasError = t(form.errors, name).safeObject
            && t(form.touched, name).safeObject;
          const errorMessage = hasError ? t(form.errors, name).safeObject : '';

          return (
            <div className={className}>
              { label && (
                <FormLabel>
                {label}
              </FormLabel>
              ) }
              <ContentFile
                {...getRootProps()}
                theme={theme}
                hasLabel={!!label}
                hasError={hasError}
                active={isDragActive}>
                <input
                  id={id}
                  {...others}
                  {...getInputProps()}
                  onChange={(event) => {
                    const dropzoneProps: any = { ...getInputProps() };
                    if (dropzoneProps) dropzoneProps.onChange(event);
                    if (onChange) onChange(event);
                  }}
                  multiple={multiple}
                />
                <CloudUploadIcon fontSize='large' />
                {
                  isDragActive
                    ? (<p>{textDragActive}</p>)
                    : (<p>{textDrag}</p>)
                }
                { renderName(field.value) }
              </ContentFile>
              <FormHelperText error={hasError}>{errorMessage}</FormHelperText>
            </div>
          );
        }
      }
    </Field>
  );
};

export { InputFile };
