import { Stack, Heading, Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Card } from 'src/components';
import { Select } from 'src/components';
const inputVariants = [
  { id: 0, heading: 'Outline', title: 'outline' },
  { id: 1, heading: 'Filled', title: 'filled' },
  { id: 2, heading: 'Flushed', title: 'flushed' },
  { id: 3, heading: 'Unstyled', title: 'unstyled' },
];

const SelectExamples = () => {
  const [value, setValue] = useState();
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Select
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
                    <Select
                      variant={variant.title}
                      placeholder="Select Option"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      options={data}
                    />
                  </Box>
                  <Box width={'100%'}>
                    <Text>Invalid</Text>
                    <Select
                      isInvalid
                      variant={variant.title}
                      placeholder="Select Option"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      options={data}
                    />
                  </Box>
                  <Box width={'100%'}>
                    <Text>Disabled</Text>
                    <Select isDisabled variant={variant.title} placeholder="Select Option" />
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

export default SelectExamples;

const data = [
  { id: 0, label: 'Option 1', value: 1 },
  { id: 1, label: 'Option 2', value: 2 },
  { id: 2, label: 'Option 3', value: 3 },
  { id: 3, label: 'Option 4', value: 4 },
];
