import {
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { BudgetField } from './BudgetField';

export const Budget = () => {
  const budget = useSelector(state => state.budgetReducer);

  return (
    <Box h={'400px'} minWidth={400} w="45%" boxShadow="dark-lg">
      <Text fontWeight="extrabold" bg="custom.boxtop" textColor="custom.navtext" p={2}>{`YOUR INCOME & SPEND`}</Text>
      <Flex bg={'gray.200'} h="100%" minWidth={400} flex={1} flexDirection="column" alignItems="start" justifyContent="space-evenly" p="1rem">
        <Text p={2} fontWeight="bold" textColor="custom.text">Annual Income</Text>
        <BudgetField field={budget.incomes[0]} />
        <Text p={2} fontWeight="bold" textColor="custom.text">Monthly spending</Text>
        {budget.expenditures.map((element) => <BudgetField key={element.name + ' budget'} field={element} />)}
      </Flex>
    </Box>
  )
};
