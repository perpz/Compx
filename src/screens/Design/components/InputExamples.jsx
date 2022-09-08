import React from 'react';
import { Input, Card } from 'src/components';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const inputVariants = [
  { id: 0, heading: 'Outline', title: 'outline' },
  { id: 1, heading: 'Filled', title: 'filled' },
  { id: 2, heading: 'Flushed', title: 'flushed' },
  { id: 3, heading: 'Unstyled', title: 'unstyled' },
];
const InputExamples = () => {
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Inputs
      </Heading>
      <Box>
        {inputVariants.map((variant) => {
          return (
            <Box key={variant.id}>
              <Heading fontSize={'20px'} mb={'10px'} mt={'30px'}>
                {variant.heading}
              </Heading>
              <Card>
                <Stack
                  spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
                  direction={'column'}
                  flexWrap={'wrap'}
                  width={{ base: '200px', sm: '300px', md: '400px', lg: '500px', xl: '600px' }}
                >
                  <Box width={'100%'}>
                    <Text>Default</Text>
                    <Input variant={variant.title} placeholder="Basic Usage" />
                  </Box>
                  <Box width={'100%'} mt={5}>
                    <Text>Left Addons</Text>
                    <Input
                      variant={variant.title}
                      placeholder="Basic Usage"
                      leftElement={<Text>$</Text>}
                    />
                  </Box>
                  <Box width={'100%'} mt={5}>
                    <Text>Right Addons</Text>
                    <Input
                      variant={variant.title}
                      placeholder="Basic Usage"
                      rightElement={<Text>$</Text>}
                    />
                  </Box>
                  <Box width={'100%'} mt={5}>
                    <Text>Left and Right Addons</Text>
                    <Input
                      variant={variant.title}
                      placeholder="Basic Usage"
                      leftElement={<Text>$</Text>}
                      rightElement={<Text>$</Text>}
                    />
                  </Box>
                  <Box width="100%" mt={5}>
                    <Text>Invalid</Text>
                    <Input isInvalid variant={variant.title} placeholder="Basic Usage" />
                  </Box>
                  <Box width="100%" mt={5}>
                    <Text>Disabled</Text>
                    <Input variant={variant.title} placeholder="Basic Usage" disabled />
                  </Box>
                </Stack>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default InputExamples;
