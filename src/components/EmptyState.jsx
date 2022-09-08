import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

function EmptyState(props) {
  const { heading, message } = props;
  return (
    <>
      <Heading>{heading}</Heading>
      <Text>{message}</Text>
    </>
  );
}

export default EmptyState;
