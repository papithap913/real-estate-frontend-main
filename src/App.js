import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PropertyManagement from './components/PropertyManagement';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/manage-properties" component={PropertyManagement} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
