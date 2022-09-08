import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Button } from 'src/components';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex align={'center'} justify="center" direction={'column'} h="100%">
      <Text>Oooops!!! not found</Text>
      <Text my={2}>Click the button below to go back</Text>

      <Button mode="primary" variant="solid" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Flex>
  );
}
export default NotFound;
