import React from 'react';

import NumberFormat from 'react-number-format';

const CurrencyField = (props: any): any => (
    <NumberFormat
      {...props}
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      allowNegative={true}
      fixedDecimalScale={true}
    />
);

export { CurrencyField };
