import React from 'react';
import { Box, Image, Heading, Flex, Text } from '@chakra-ui/react';
import heroImage from 'src/assets/home.jpg';

function DesignComponents() {
  return (
    <Box height={'100%'} w="100%" position={'relative'}>
      <Image src={heroImage} objectFit={'cover'} alt="hero" width={'100%'} height="100%" />
      <Box background={'rgba(0,0,0,0.6)'} position="absolute" w={'100%'} top={'0px'} height="100%">
        <Flex
          justifyContent={'center'}
          height={'100%'}
          width={'100%'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Heading color={'doctor'} lineHeight={'55px'}>
            Welcome
          </Heading>
          <Text
            textAlign={'center'}
            color={'white'}
            maxWidth={'800px'}
            lineHeight={'40px'}
            fontSize={'24px'}
            opacity={0.6}
          >
            Compx is a template for storing different re-usable react components. Download, edit the
            design, and add to your own react project to make it your own.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
export default DesignComponents;
