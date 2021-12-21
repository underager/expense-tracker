import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transactions from './components/Transactions';
import AddTransaction  from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  
  return (
    <div className = 'App'>
      <Header />
      <GlobalProvider>
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
