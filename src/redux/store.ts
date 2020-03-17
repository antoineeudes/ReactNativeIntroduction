import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
