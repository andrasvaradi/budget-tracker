import { SET_SAVINGS, CHANGE_EXPENDITURE } from './actionTypes';

export function calculateSavings() {
  return function (dispatch) {
    dispatch(setSavings());
  }
}
export function calculateNewSavings(fieldChange) {
  return function (dispatch) {
    dispatch(setNewExpenditure(fieldChange));
  }
}
const setSavings = () => {
  return {
    type: SET_SAVINGS,
  };
}
const setNewExpenditure = (fieldChange) => {
  return {
    type: CHANGE_EXPENDITURE,
    payload: fieldChange
  };
}
