import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Intake from './pages/Intake';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>




        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/intake' element={<Intake />}></Route>



       

      </Routes>
    </>
  );
}

export default App;
