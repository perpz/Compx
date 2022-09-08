import React, { forwardRef } from 'react';
import { Textarea as ChakraTextarea } from '@chakra-ui/react';

const Textarea = forwardRef(function Textarea(props, ref) {
  const { ...rest } = props;
  return (
    <ChakraTextarea
      ref={ref}
      {...rest}
      borderRadius={'10px'}
      _focus={{
        border: '1px solid',
        borderColor: 'primary',
        outline: 'none',
        boxShadow: 'none',
        borderRadius: '10px',
      }}
      _hover={{
        border: '1px solid #fff',
        outline: 'none',
        boxShadow: 'none',
        borderRadius: '10px',
      }}
    />
  );
});

export default Textarea;
