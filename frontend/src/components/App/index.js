import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../Main';
import ContactList from '../ContactList';
import './style.css';

const App = () => (
  <BrowserRouter>
    <div className="l_wrapper">
      <ContactList />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
