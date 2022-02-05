import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/login" exact><LoginPage /></Route>
          <Route path="/checkout" exact><CheckoutPage /></Route>
          <Route path="*" ><Redirect to="/" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;