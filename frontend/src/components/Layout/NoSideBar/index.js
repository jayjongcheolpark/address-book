import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const NoSideBarLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <div />
        <Component {...matchProps} />
      </Fragment>
    )}
  />
);

NoSideBarLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default NoSideBarLayout;
