import React from 'react';
import { Box, Stack, Heading, HStack } from '@chakra-ui/react';
import { PinInput, Card, PinInputField } from 'src/components';

function PinInputExamples() {
  return (
    //
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        PinInput
      </Heading>
      <Stack
        spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
        direction={'column'}
        flexWrap={'wrap'}
      >
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Pin
          </Heading>
          <Card alignItems="center">
            <Box>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Alphanumeric
          </Heading>

          <Box>
            <Card alignItems="center">
              <Box>
                <HStack>
                  <PinInput variant="outline" type="alphanumeric">
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Box>
            </Card>
          </Box>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Otp
          </Heading>
          <Card alignItems="center">
            <Box>
              <HStack>
                <PinInput otp>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Masked
          </Heading>
          <Card alignItems="center">
            <Box>
              <HStack>
                <PinInput type="alphanumeric" mask>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Defaultvalue
          </Heading>
          <Card alignItems="center">
            <Box>
              <HStack>
                <PinInput defaultValue="1234">
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Placeholder
          </Heading>
          <Card alignItems="center">
            <Box>
              <HStack>
                <PinInput placeholder="#">
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Focus
          </Heading>
          <Card alignItems="center">
            <Box>
              <HStack>
                <PinInput manageFocus={false}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default PinInputExamples;
