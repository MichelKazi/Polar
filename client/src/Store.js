// store.js
import React, {createContext, useReducer} from 'react';

const initialState = { };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'handleEmail':
				return {...state, email: action.payload}	
			case 'handlePassword':
				return {...state, password: action.payload}
			case 'setUser':
				delete state.email;
				delete state.password;
				return {...state, user: action.payload}
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
