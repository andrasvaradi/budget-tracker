import {
  Text,
  Flex,
  Box,
  Input
} from '@chakra-ui/react';

export const BudgetField = ({ field }) => {

  function handleChange() {
    // If we want to make this available to edit
  }

  return (
    <Flex bg={'gray.200'} justifyContent="space-evenly" >
      <Box maxWidth="35%" textAlign="start">
        <Text textColor="custom.text">{field.name}:</Text>
        <Input variant="filled" size="sm" value={field.amount} onChange={handleChange} />
      </Box>
      <Box maxWidth="30%" textAlign="start">
        <Text textColor="custom.text">From age:</Text>
        <Input variant="filled" size="sm" value={field.from_age} onChange={handleChange} />
      </Box>
      <Box maxWidth="30%" textAlign="start">
        <Text textColor="custom.text">To age:</Text>
        <Input variant="filled" size="sm" value={field.to_age} onChange={handleChange} />
      </Box>
    </Flex>
  )
};
