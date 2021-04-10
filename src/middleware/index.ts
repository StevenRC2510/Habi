import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const AppMiddlewares = () => {
  let middlewares = compose(applyMiddleware(thunk));

  if (process.env.NODE_ENV === 'development') {
    middlewares = composeWithDevTools(middlewares);
  }
  return middlewares;
};
