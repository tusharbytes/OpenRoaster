import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Intake from './pages/Intake';
import ProtectedRoute from './common/ProtectedRoute';
import SubscriptionPlans from './pages/Subscription';
import PostAJob from './Components/postAJob/PostAJob';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PostAJob />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Login />}></Route>




        {/* Protected Routes */}
      <Route path='/intake' element={<ProtectedRoute element={<Intake />} />} />




       

      </Routes>
    </>
  );
}

export default App;
