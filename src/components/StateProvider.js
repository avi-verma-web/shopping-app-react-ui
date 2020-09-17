//React context API
//setup data layer
import React, { createContext, useContext, useReducer } from "react";



//This is data layer
export const StateContext = createContext();



//Building Provider
export const StateProvider = ({ reducer, initialState, children }) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}



//this is how to use inside component
export const useStateValue=()=>useContext(StateContext)
 
