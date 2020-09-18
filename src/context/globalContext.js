import React, { createContext, useReducer, useContext } from "react";

//Define the context

const defaultState = {
  openedMenu: false,
};

const GlobalStateContext = createContext(defaultState);
const GlobalDispatchContext = createContext();

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "MENU_OPENED": {
      return {
        ...state,
        openedMenu: action.openedMenu,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    openedMenu: false,
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//Custom hooks to use dispatch and state

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
