import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Intake from './pages/Intake';
import ProtectedRoute from './common/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>




        {/* Protected Routes */}
      <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path='/intake' element={<ProtectedRoute element={<Intake />} />} />



       

      </Routes>
    </>
  );
}

export default App;
