import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes>
    </>
  );
}

export default App;
