import { SET_SAVINGS, CHANGE_EXPENDITURE } from '../actions/actionTypes';

const initialState = {
  incomes: [
    {
      amount: 45300, from_age: 30, to_age: 67, frequency: "annual", name: "Annual salary"
    }
  ],
  expenditures: [
    {
      amount: 1199, from_age: 30, to_age: 65, frequency: "monthly", name: "Mortgage"
    },
    {
      amount: 1199, from_age: 30, to_age: 65, frequency: "monthly", name: "Bills"
    },
    {
      amount: 1199, from_age: 30, to_age: 65, frequency: "monthly", name: "General spending"
    }
  ],
  savings: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SAVINGS:
      const totalIncome = state.incomes[0].amount * (state.incomes[0].to_age - state.incomes[0].from_age);
      const totalExpenditure = [...state.expenditures].reduce((acc, curr) => {
        return acc + curr.amount * ((curr.to_age - curr.from_age) * 12)
      }, 0)
      const calculatedSavings = Math.floor((totalIncome - totalExpenditure) / (state.incomes[0].to_age - state.incomes[0].from_age) / 12)
      return { ...state, savings: calculatedSavings };
    case CHANGE_EXPENDITURE:
      const { val, fieldName } = action.payload
      if (val) {
        const newExpenditures = [...state.expenditures].map((exp) => {
          if (exp.name === fieldName) {
            return { ...exp, amount: val }
          } else return exp
        })
        return { ...state, expenditures: newExpenditures };
      } else return { ...state }
    default:
      return state;
  }
}

export default reducer;