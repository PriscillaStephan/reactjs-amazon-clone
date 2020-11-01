//React Context API - for datalayer (to push the items to the datalayer and from it to the basket) 
import React, { createContext, creteContext, useContext, useReducer} from "react";

//Prepare the datalayer
export const StateContext = createContext();

//Wrap our app provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext); 
