import React, { forwardRef } from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

const Input = forwardRef(function Input(props, ref) {
  const { leftElement, leftElementWidth, rightElementWidth, rightElement, ...rest } = props;
  return (
    <InputGroup>
      {leftElement ? (
        <InputLeftElement pointerEvents="none" width={leftElementWidth} height={'100%'}>
          {leftElement}
        </InputLeftElement>
      ) : null}

      <ChakraInput
        paddingLeft={leftElementWidth ? leftElementWidth : leftElement ? '2.5rem' : '1rem'}
        paddingRight={rightElementWidth ? rightElementWidth : '2.5rem'}
        ref={ref}
        {...rest}
      />

      {rightElement ? (
        <InputRightElement pointerEvents="none" width={rightElementWidth} height={'100%'}>
          {rightElement}
        </InputRightElement>
      ) : null}
    </InputGroup>
  );
});

export default Input;
