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
import MyRoutes from './routes/Route';

function App() {
  return (
    <>  
        <MyRoutes/>
    </>
  );
}

export default App;
