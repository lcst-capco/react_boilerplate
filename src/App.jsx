import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/*" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
