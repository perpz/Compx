import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import {
  IoIosArrowDropdown,
  IoIosLink,
  IoIosRadioButtonOff,
  IoMdCheckboxOutline,
  IoMdRadioButtonOn,
  IoMdSwitch,
} from 'react-icons/io';
import { BsInputCursor, BsTags, BsUnlock, BsCardText } from 'react-icons/bs';
import { Link } from 'src/components';

const navLinks = [
  { id: 0, name: 'Home', icon: <GoHome />, path: '/components/home' },
  { id: 1, name: 'Button', icon: <IoIosRadioButtonOff />, path: '/components/button' },
  { id: 2, name: 'Input', icon: <BsInputCursor />, path: '/components/input' },
  { id: 3, name: 'Checkbox', icon: <IoMdCheckboxOutline />, path: '/components/checkbox' },
  { id: 4, name: 'Radio', icon: <IoMdRadioButtonOn />, path: '/components/radio' },
  { id: 5, name: 'Select', icon: <IoIosArrowDropdown />, path: '/components/select' },
  { id: 6, name: 'Link', icon: <IoIosLink />, path: '/components/link' },
  { id: 7, name: 'PinInput', icon: <BsUnlock />, path: '/components/pin-input' },
  { id: 8, name: 'Switch', icon: <IoMdSwitch />, path: '/components/switch' },
  { id: 9, name: 'Tags', icon: <BsTags />, path: '/components/tags' },
  { id: 10, name: 'Textarea', icon: <BsCardText />, path: '/components/textarea' },
];

function Layout() {
  const location = useLocation();
  const shouldRedirect =
    location.pathname === '/components' || location.pathname === '/components/';
  return (
    <Box h="100%">
      <Container maxWidth={'1440px'} p="0px">
        {shouldRedirect ? (
          <Navigate replace to="/components/home" />
        ) : (
          <Flex>
            {/* sidebar */}
            <Flex
              align={'center'}
              flexDirection="column"
              w="20%"
              minH="100vh"
              position={'relative'}
            >
              <Box position={'fixed'} overflowY="auto" h="100%" w="16%" marginY={'30px'}>
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    py={'12px'}
                    mb={'2px'}
                    as={NavLink}
                    to={link.path}
                    variant="link"
                  >
                    <Flex alignItems={'center'}>
                      <Box mr={'10px'}>{link.icon}</Box>
                      <Box>{link.name}</Box>
                    </Flex>
                  </Link>
                ))}
              </Box>
            </Flex>
            {/* main */}
            <Box w="80%" bg="doctor" minH="100vh">
              <Outlet />
            </Box>
          </Flex>
        )}
      </Container>
    </Box>
  );
}
export default Layout;
