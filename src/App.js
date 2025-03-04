import './App.css';
import MyRoutes from './routes/Route';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import Payment from './pages/Payment';

const stripePromise = loadStripe("pk_test_51QrdyK08yFVxPUE62v6HooTeWZMJaMabvv6iDx7EpCxsx7AOPJVDMYFfGOkIh7GcsAF8PgSH9ut0wqy3dubcZ7VL00apQb6LeX")

function App() {
  return (
    <>  
    <Elements stripe={stripePromise}>
        <MyRoutes/>
        </Elements>
    </>
  );
}

export default App;
