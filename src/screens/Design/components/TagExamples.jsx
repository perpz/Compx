import {
  Box,
  Heading,
  Stack,
  TagLabel,
  Text,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { MdOutlineGroupAdd, MdSettings } from 'react-icons/md';
import { Card, Tag } from 'src/components';

const tagVariants = [
  { id: 0, heading: 'Solid', title: 'solid' },
  { id: 1, heading: 'Subtle', title: 'subtle' },
  { id: 2, heading: 'Outline', title: 'outline' },
  { id: 3, heading: 'Ghost', title: 'ghost' },
];

const TagExamples = () => {
  return (
    <Box
      paddingTop={'30px'}
      paddingBottom={'100px'}
      paddingX={{ base: '20px', sm: '40px', md: '80px', lg: '100px', xl: '120px' }}
    >
      <Heading mb="30px" fontSize={'24px'}>
        Tags
      </Heading>
      <Box>
        {tagVariants.map((variant) => {
          return (
            <Box key={variant.id}>
              <Heading fontSize={'20px'} mb={'10px'} mt={'30px'}>
                {variant.heading}
              </Heading>
              <Card alignItems="flex-start">
                <Stack
                  spacing={{ base: 0, sm: 2, md: 4, lg: 6, xl: 8 }}
                  direction="row"
                  flexWrap={'wrap'}
                >
                  <Box>
                    <Text>Default</Text>
                    <Tag size="lg" variant={variant.title} borderRadius="full">
                      Sample Tag
                    </Tag>
                  </Box>
                  <Box>
                    <Text>Left Icon</Text>
                    <Tag size="lg" variant={variant.title} borderRadius="full">
                      <TagLeftIcon boxSize="12px" as={MdOutlineGroupAdd} />
                      <TagLabel>Sample Tag</TagLabel>
                    </Tag>
                  </Box>
                  <Box>
                    <Text> Right Icon</Text>
                    <Tag size="lg" variant={variant.title} borderRadius="full">
                      <TagLabel>Sample Tag</TagLabel>
                      <TagRightIcon as={MdSettings} />
                    </Tag>
                  </Box>
                  <Box>
                    <Text>Close Button</Text>
                    <Tag size="lg" borderRadius="full" variant={variant.title}>
                      <TagLabel>Sample Tag</TagLabel>
                      <TagCloseButton />
                    </Tag>
                  </Box>
                  <Box>
                    <Text>Custom Element</Text>
                    <Tag size="lg" variant={variant.title} borderRadius="full">
                      <Avatar
                        src="https://bit.ly/sage-adebayo"
                        size="xs"
                        name="Segun Adebayo"
                        ml={-1}
                        mr={2}
                      />
                      <TagLabel>Sample Tag</TagLabel>
                    </Tag>
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

export default TagExamples;
