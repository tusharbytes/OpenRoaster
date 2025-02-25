import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Intake from './pages/Intake';
import ProtectedRoute from './common/ProtectedRoute';
import PostAJob from './Components/postAJob/PostAJob';
import Dashboard from './pages/Dashboard';
import SubscriptionPlans from './pages/Subscription';

function App() {
  return (
    <>  
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Login />}></Route>




        {/* Protected Routes */}
      <Route path='/intake' element={<ProtectedRoute element={<Intake />} />} />
      <Route path='/postajob' element={<ProtectedRoute element={<PostAJob />} />} />
      <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path='/subscription' element={<ProtectedRoute element={<SubscriptionPlans />} />} />







       

      </Routes>
    </>
  );
}

export default App;
