import { Box, FormControl, FormLabel, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Switch, Card } from 'src/components';

function SwitchExamples() {
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Switch
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
          <Card alignItems="left">
            <Box>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0">
                  Enable Switch?
                </FormLabel>
                <Switch id="email-alerts" />
              </FormControl>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Checked
          </Heading>
          <Card alignItems="left">
            <Box>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="isChecked" mb="0">
                  Enable Switch?
                </FormLabel>
                <Switch id="isChecked" isChecked />
              </FormControl>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Disabled
          </Heading>
          <Card alignItems="left">
            <Box>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="isDisabled" mb="0">
                  Enable Switch?
                </FormLabel>
                <Switch id="isDisabled" isDisabled defaultChecked />
              </FormControl>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Focused
          </Heading>
          <Card alignItems="left">
            <Box>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="isFocusable" mb="0">
                  Enable Switch?
                </FormLabel>
                <Switch id="isFocusable" isFocusable isDisabled />
              </FormControl>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Invalid
          </Heading>
          <Card alignItems="left">
            <Box>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="isInvalid" mb="0">
                  Enable Switch?
                </FormLabel>
                <Switch id="isInvalid" isInvalid />
              </FormControl>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Readonly
          </Heading>
          <Card alignItems="left">
            <Box>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="isReadOnly" mb="0">
                  Enable Switch?
                </FormLabel>
                <Switch id="isReadOnly" isReadOnly />
              </FormControl>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Required
          </Heading>
          <Card alignItems="left">
            <Box>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="isRequired" mb="0">
                  Enable Switch?
                </FormLabel>
                <Switch id="isRequired" isRequired />
              </FormControl>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default SwitchExamples;
