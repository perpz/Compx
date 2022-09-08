import { Box, Heading, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Card, Radio, Textarea } from 'src/components';

function TextareaExamples() {
  const [resize, setResize] = React.useState('horizontal');
  let [value, setValue] = React.useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Textarea
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
            <Box width={'100%'}>
              <Textarea placeholder="Textarea Space" />
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Filled
          </Heading>
          <Card alignItems="flex-start">
            <Box width={'100%'}>
              <Textarea variant="filled" placeholder="Textarea Space" />
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Unstyled
          </Heading>
          <Card alignItems="flex-start">
            <Box width={'100%'}>
              <Textarea variant="unstyled" placeholder="Textarea Space" />
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Controlled
          </Heading>
          <Card alignItems="flex-start">
            <Box width={'100%'}>
              <Text mb="8px">Value: {value}</Text>
              <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder="Textarea Space"
                size="sm"
              />
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Resized
          </Heading>
          <Card alignItems="flex-start">
            <Box width={'100%'}>
              <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
                <Stack direction="row" spacing={5}>
                  <Radio value="horizontal">Horizontal</Radio>
                  <Radio value="vertical">Vertical</Radio>
                  <Radio value="none">None</Radio>
                </Stack>
              </RadioGroup>

              <Textarea placeholder="Textarea Space" size="sm" resize={resize} />
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Disabled
          </Heading>
          <Card alignItems="flex-start">
            <Box width={'100%'}>
              <Textarea isDisabled placeholder="Textarea Space" />
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading mb="30px" fontSize={'20px'}>
            Invalid
          </Heading>
          <Card alignItems="flex-start">
            <Box width={'100%'}>
              <Textarea isInvalid placeholder="Textarea Space" />
            </Box>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default TextareaExamples;
