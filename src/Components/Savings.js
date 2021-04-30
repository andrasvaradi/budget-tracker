import React, { useState, useEffect } from 'react';
import {
  Text,
  Flex,
  Button,
  Box,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { SliderField } from './SliderField';
import { calculateNewSavings } from '../Store/actions/budget';

export const Savings = () => {
  const [fieldChange, setFieldChange] = useState({ val: 0, fieldName: '' })
  const [feedbackVisible, setFeedbackVisible] = useState(true)
  const dispatch = useDispatch();
  const budget = useSelector(state => state.budgetReducer);

  useEffect(() => {
    const action = calculateNewSavings(fieldChange)
    dispatch(action)
  }, [fieldChange])

  return (
    <Box h={'400px'} minWidth={400} w="45%" boxShadow="dark-lg">
      <Text fontWeight="extrabold" bg="custom.boxtop" textColor="custom.navtext" p={2}>SPEND LESS</Text>
      <Flex bg={'gray.200'} h="100%" minWidth={400} flex={1} flexDirection="column" alignItems="center" justifyContent="space-evenly" p="1rem">
        <Text p={2} textColor="custom.text">Try reducing your monthly spending to see how your forecast could improve!</Text>
        {budget.expenditures.map((element) => <SliderField key={element.name + ' saving'} field={element} setFieldChange={setFieldChange} maxAmount={budget.incomes[0].amount} />)}
        <Text p={2} fontWeight="bold" textColor="custom.boxtop">This means you're saving £{budget.savings} per month</Text>
        <Button color="custom.navbar" colorScheme="custom.navbar" w="50%" variant="outline" onClick={() => window.location.href = 'https://www.vouchedfor.co.uk/accountant'}>Find ways to save</Button>
        {feedbackVisible ? (
          <Flex alignSelf="flex-end" justifyContent="space-evenly" w="70%">
            <Text alignSelf="center">Was this helpful?</Text>
            <img src="thumbs.png" alt="thumbsup" onClick={() => setFeedbackVisible(false)} />
            <img src="thumbs-2.png" alt="thumbsdown" onClick={() => setFeedbackVisible(false)} />
          </Flex>
        ) : (null)}
      </Flex>
    </Box>
  )
};
