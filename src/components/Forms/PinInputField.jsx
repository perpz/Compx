import React, { forwardRef } from 'react';
import { PinInputField as ChakraPinInputField } from '@chakra-ui/react';

const PinInputField = forwardRef(function Checkbox(props, ref) {
  const { ...rest } = props;
  return (
    <ChakraPinInputField
      ref={ref}
      {...rest}
      _focus={{
        borderColor: 'brand',
        outline: 'none',
        boxShadow: 'none',
      }}
      _hover={{
        border: '1px solid #bbbbbb',
        outline: 'none',
        boxShadow: 'none',
      }}
    />
  );
});

export default PinInputField;
