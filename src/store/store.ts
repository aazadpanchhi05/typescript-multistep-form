import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './userReducer';

const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof userReducer>;

export default store;