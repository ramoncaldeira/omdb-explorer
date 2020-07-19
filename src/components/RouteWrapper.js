import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppLayout from '../layouts/AppLayout';

const RouteWrapper = ({ component: Component, layout: Layout, ...other }) => (
  <Route
    {...other}
    render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
);

RouteWrapper.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType,
};

RouteWrapper.defaultProps = {
  layout: AppLayout,
};

export default RouteWrapper;
