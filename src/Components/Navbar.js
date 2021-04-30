import {
  Text,
  Flex,
  Button
} from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex p={2} h={'50px'} bg={'custom.navbar'} justifyContent="space-between" alignItems="flex-end">
      <Text fontWeight="bold" textColor="custom.navtext">Your Financial Plan</Text>
      <Text fontWeight="bold" textColor="custom.navtext">{`Tips & Blogs`}</Text>
      <Button textColor="custom.navtext" fontWeight="bold" alignSelf="center" variant='outline' >Log Out</Button>
    </Flex>
  )
};
