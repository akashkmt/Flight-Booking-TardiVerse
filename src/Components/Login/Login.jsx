import React from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, FormLabel, InputGroup, Input, InputRightElement, Button, Box, Stack, useDisclosure } from '@chakra-ui/react';



function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Button color='black' variant='link' onClick={onOpen}>
        LOGIN
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Login to your account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <InputGroup>
                  <Input
                  ref={firstField}
                    type='email'
                    id='email'
                    placeholder='Enter email'
                  />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>Password</FormLabel>
                <InputGroup>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Login</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Login;