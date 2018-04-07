import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import SideBar from '../../SideBar';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <SideBar />
        <Component {...matchProps} />
      </Fragment>
    )}
  />
);

DefaultLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default DefaultLayout;
