import React, { forwardRef } from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';

const Link = forwardRef(function Link(props, ref) {
  const {
    children,
    flexDirection = 'row',
    display = 'flex',
    alignItems = 'center',
    ...rest
  } = props;
  return (
    <ChakraLink
      flexDirection={flexDirection}
      display={display}
      alignItems={alignItems}
      ref={ref}
      {...rest}
    >
      {children}
    </ChakraLink>
  );
});

export default Link;
