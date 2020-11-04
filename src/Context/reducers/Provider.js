import React,{createContext, useReducer} from 'react';
import authinitialState from '../InitialState/authinitialState';
import contacts from './contacts';
import auth from './auth';
import contactsInitialState from '../InitialState/contactsInitialState';

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {

    const [authState,authDispatch] = useReducer(auth,authinitialState);
    const [contactsState,contactsDispatch] = useReducer(contacts,contactsInitialState);        

    return (<GlobalContext.Provider value = {{
        authState,
        authDispatch,
        contactsState,
        contactsDispatch,
    }}>
        {children}
    </GlobalContext.Provider>)
};


