import React from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { MdAlternateEmail } from 'react-icons/md';
import { Button, Card } from 'src/components';

const buttonVariants = [
  { id: 0, heading: 'Solid', title: 'solid' },
  { id: 1, heading: 'Outline', title: 'outline' },
  { id: 2, heading: 'Ghost', title: 'ghost' },
  { id: 3, heading: 'Link', title: 'link' },
  { id: 4, heading: 'Naked', title: 'naked' },
];

const ButtonExamples = () => {
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Buttons
      </Heading>

      <Box>
        {buttonVariants.map((variant) => {
          return (
            <Box key={variant.id}>
              <Heading fontSize={'20px'} mb={'10px'} mt={'30px'}>
                {variant.heading}
              </Heading>
              <Card>
                {/* primary  */}
                <Stack
                  spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
                  direction="row"
                  flexWrap={'wrap'}
                >
                  <Box>
                    <Text>Primary</Text>
                    <Button variant={variant.title} mode="primary" size="md">
                      Button
                    </Button>
                  </Box>
                  <Box>
                    <Text>Disabled</Text>
                    <Button variant={variant.title} isDisabled mode="primary" size="md">
                      Button
                    </Button>
                  </Box>
                  <Box>
                    <Text>Loading</Text>
                    <Button
                      variant={variant.title}
                      mode="primary"
                      size="md"
                      isLoading
                      loadingText="Loading"
                      spinnerPlacement="end"
                    >
                      Button
                    </Button>
                  </Box>
                  <Box>
                    <Text>Left Icon</Text>
                    <Button
                      leftIcon={<MdAlternateEmail />}
                      mode="primary"
                      variant={variant.title}
                      size="md"
                    >
                      Email
                    </Button>
                  </Box>
                  <Box>
                    <Text>Right Icon</Text>
                    <Button
                      rightIcon={<MdAlternateEmail />}
                      mode="primary"
                      variant={variant.title}
                      size="md"
                    >
                      Email
                    </Button>
                  </Box>
                  <Box>
                    <Text>Icon</Text>
                    <Button
                      icon={<MdAlternateEmail />}
                      mode="primary"
                      variant={variant.title}
                      size="md"
                    />
                  </Box>
                </Stack>
                {/* secondary */}
                <Stack
                  spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
                  pt={5}
                  direction="row"
                  flexWrap={'wrap'}
                >
                  <Box>
                    <Text>Secondary</Text>

                    <Button variant={variant.title} mode="secondary" size="md">
                      Button
                    </Button>
                  </Box>
                  <Box>
                    <Text>Disabled</Text>
                    <Button variant={variant.title} isDisabled mode="secondary" size="md">
                      Button
                    </Button>
                  </Box>
                  <Box>
                    <Text>Loading</Text>
                    <Button
                      variant={variant.title}
                      mode="secondary"
                      size="md"
                      isLoading
                      loadingText="Loading"
                      spinnerPlacement="end"
                    >
                      Button
                    </Button>
                  </Box>
                  <Box>
                    <Text>Left Icon</Text>
                    <Button
                      leftIcon={<MdAlternateEmail />}
                      mode="secondary"
                      variant={variant.title}
                      size="md"
                    >
                      Email
                    </Button>
                  </Box>
                  <Box>
                    <Text>Right Icon</Text>
                    <Button
                      rightIcon={<MdAlternateEmail />}
                      mode="secondary"
                      variant={variant.title}
                      size="md"
                    >
                      Email
                    </Button>
                  </Box>
                  <Box>
                    <Text>Icon</Text>
                    <Button
                      icon={<MdAlternateEmail />}
                      mode="secondary"
                      variant={variant.title}
                      size="md"
                    />
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
export default ButtonExamples;
