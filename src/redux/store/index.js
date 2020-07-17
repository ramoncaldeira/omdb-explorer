import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default store;