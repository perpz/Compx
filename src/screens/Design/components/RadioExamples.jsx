import { Box, Heading, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';
import { Card, Radio } from 'src/components';
function RadioExamples() {
  const [value, setValue] = React.useState('1');
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Radios
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
              <RadioGroup onChange={setValue} value={value}>
                <Stack
                  spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
                  direction={'column'}
                  flexWrap={'wrap'}
                >
                  <Radio value="1">First</Radio>
                  <Radio value="2">Second</Radio>
                  <Radio value="3">Third</Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Invalid
          </Heading>
          <Card alignItems="flex-start">
            <Box>
              <Radio isInvalid>Radio</Radio>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Disabled
          </Heading>
          <Card alignItems="flex-start">
            <Box>
              <RadioGroup defaultValue="1">
                <Stack
                  spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
                  direction={'column'}
                  flexWrap={'wrap'}
                >
                  <Radio value="1" isDisabled>
                    Checked
                  </Radio>
                  <Radio value="2" isDisabled>
                    Unchecked
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default RadioExamples;
