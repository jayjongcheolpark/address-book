import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from '../SideBar';
import Main from '../Main';
import ContactDetail from '../Contact/Detail';
import NotFound from '../NotFound';

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
`;

const App = () => (
  <BrowserRouter>
    <GridDiv>
      <SideBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:id" component={ContactDetail} />
        <Route component={NotFound} />
      </Switch>
    </GridDiv>
  </BrowserRouter>
);
export default App;
