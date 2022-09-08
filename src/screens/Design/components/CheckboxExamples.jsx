import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Checkbox, Card } from 'src/components';

function CheckboxExamples() {
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Checkbox
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
              <Checkbox variant="primary">Checkbox</Checkbox>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Invalid
          </Heading>
          <Card alignItems="flex-start">
            <Box>
              <Checkbox isInvalid>Checkbox</Checkbox>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Disabled
          </Heading>
          <Card alignItems="flex-start">
            <Box>
              <Stack
                spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
                direction={'column'}
                flexWrap={'wrap'}
              >
                <Box>
                  <Text> Default</Text>
                  <Checkbox isDisabled>Checkbox</Checkbox>
                </Box>
                <Box>
                  <Text> Checked</Text>
                  <Checkbox isDisabled defaultChecked>
                    Checkbox
                  </Checkbox>
                </Box>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default CheckboxExamples;
