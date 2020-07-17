import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" render={() => (<div>Match</div>)} />
            <Route render={() => (<div>Miss</div>)} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;