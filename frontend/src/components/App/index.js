import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Main from '../Main';
import ContactDetail from '../Contact/Detail';
import ContactDetailEdit from '../Contact/Detail/Edit';
import NotFound from '../NotFound';
import DefaultLayout from '../Layout/Default';
import NoSideBarLayout from '../Layout/NoSideBar';

const GridDiv = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px 1fr;
`;

const App = () => (
  <BrowserRouter>
    <GridDiv>
      <Switch>
        <DefaultLayout exact path="/" component={Main} />
        <DefaultLayout exact path="/:id" component={ContactDetail} />
        <NoSideBarLayout exact path="/edit/:id" component={ContactDetailEdit} />
        <DefaultLayout component={NotFound} />
      </Switch>
    </GridDiv>
  </BrowserRouter>
);

export default App;
