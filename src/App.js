import React, { useEffect } from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { calculateSavings } from './Store/actions/budget';
import { Navbar } from './Components/Navbar';
import { Budget } from './Components/Budget';
import { Savings } from './Components/Savings';

function App() {
  const dispatch = useDispatch();
  const expenditures = useSelector(state => state.budgetReducer.expenditures);

  useEffect(() => {
    const action = calculateSavings();
    dispatch(action)
  }, [expenditures]);

  return (
    <Box bg={'custom.background'} className="App" w='100%' h={'100vh'}>
      <Navbar />
      <Flex h='80%' p='2%' justifyContent="space-evenly" alignItems="center">
        <Budget />
        <Savings />
      </Flex>

    </Box>
  );
}

export default App;
