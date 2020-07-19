import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import RouteWrapper from '../components/RouteWrapper';

import Search from '../pages/Search';
import Details from '../pages/Details';

function Routes({ history }) {
  return (
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <RouteWrapper exact path="/" component={Search} />
          <RouteWrapper path="/movie/:id" component={Details} />
        </Switch>
      </>
    </ConnectedRouter>
  );
}

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
