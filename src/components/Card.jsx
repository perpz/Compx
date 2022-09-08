import React from 'react';
import { Flex } from '@chakra-ui/react';

const Card = (props) => {
  return (
    <Flex
      bg={props.bg ? props.bg : 'white'}
      border={props.border ? props.border : '1px solid'}
      borderColor={props.borderColor ? props.borderColor : 'superSilver'}
      borderRadius={props.borderRadius ? props.borderRadius : '20px'}
      boxShadow={props.borderColor ? props.borderColor : '0px 1px 2px rgba(16, 24, 40, 0.05)'}
      py={props.py ? props.py : '30px'}
      px={props.px ? props.px : '30px'}
      alignItems={props.alignItems ? props.alignItems : 'center'}
      justifyContent={props.justifyContent ? props.justifyContent : 'center'}
      flexDirection={props.flexDirection ? props.flexDirection : 'column'}
      {...props.rest}
    >
      {props.children}
    </Flex>
  );
};

export default Card;
