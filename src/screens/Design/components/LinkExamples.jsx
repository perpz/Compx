import { Box, Text, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link, Card } from 'src/components';
import { BiLinkExternal } from 'react-icons/bi';
// import { ExternalLinkIcon } from '@chakra-ui/icons';

function LinkExamples() {
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Links
      </Heading>
      <Stack
        spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
        direction={'column'}
        flexWrap={'wrap'}
      >
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Default
          </Heading>
          <Card alignItems="flex-start">
            <Box>
              <Link>Compx UI</Link>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            External
          </Heading>
          <Card alignItems="flex-start">
            <Link href="https://chakra-ui.com" isExternal>
              Compx Design system
              <Box mx={'8px'}>
                <BiLinkExternal />
              </Box>
            </Link>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Inline
          </Heading>
          <Card alignItems="flex-start">
            <Box>
              <Text>
                Did you know that{' '}
                <Link display={'inline-block'} href="#">
                  links can live inline with text
                </Link>
              </Text>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default LinkExamples;
