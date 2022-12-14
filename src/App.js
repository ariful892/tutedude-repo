import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import WithdrawBalance from './Pages/WithdrawBalance/WithdrawBalance';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='withdraw' element={<WithdrawBalance></WithdrawBalance>}></Route>
      </Routes>
    </div>
  );
}

export default App;
