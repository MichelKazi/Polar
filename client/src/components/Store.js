// store.js
import React, {createContext, useReducer} from 'react';

const userState = {
	id: 0,
	fullName: null
} 

const store = createContext(userState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
			case 'setUser':
				delete state.email;
				delete state.password;
				return {...state, ...action.payload}
			case 'setToken':
				return {...state, token: action.payload}
      default:
        return {...state}
    };
  }, userState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
