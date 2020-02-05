// store.js
import React, {createContext, useReducer} from 'react';

const userState = {
} 

const store = createContext(userState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
			case 'setUser':
				console.log('User is being set')
				return {...state,  ...action.payload}
			case 'setToken':
				console.log('Token is being set')
				return {...state, token: action.payload}
      default:
        return {...state}
    };
  }, userState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
