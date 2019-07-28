import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export const persistor = persistStore(store);