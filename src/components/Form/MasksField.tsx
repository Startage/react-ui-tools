import React from 'react';
import MaskedInput from 'react-text-mask';

import { typesMasks } from './typesMask';


const MaskField = (props: any): any => {
  const { mask, inputRef, ...other } = props;
  const { style, inputMode } = typesMasks(mask);

  return (
    <MaskedInput
      {...other}
      inputMode={inputMode}
      mask={style}
      guide={false}
    />
  );
};

export { MaskField };
