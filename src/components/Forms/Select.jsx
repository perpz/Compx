import React, { forwardRef } from 'react';
import { Select as ChakraSelect } from '@chakra-ui/react';

const Select = forwardRef(function Radio(props, ref) {
  const { children, value, defaultValue = 'DEFAULT', placeholder, options, ...rest } = props;

  return (
    <ChakraSelect
      ref={ref}
      defaultValue={defaultValue}
      value={value}
      color={defaultValue === 'DEFAULT' && value === undefined ? 'gravelFint' : 'black'}
      {...rest}
    >
      <option disabled value={'DEFAULT'}>
        {placeholder}
      </option>
      {options
        ? options.map((option, index) => (
            <option
              value={option.value}
              key={option.id ? option.id : option.uuid ? option.uuid : `option-${index}`}
            >
              {option.label}
            </option>
          ))
        : children}
    </ChakraSelect>
  );
});

export default Select;
