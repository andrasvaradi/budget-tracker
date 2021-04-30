
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { calculateSavings } from './Store/actions/budget';

function App() {

  const dispatch = useDispatch();
  const budget = useSelector(state => state.budgetReducer);

  return (
    <div className="App">
      <div>{budget.savings}</div>
    </div>
  );
}

export default App;
