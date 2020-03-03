import React from 'react';

export const defaultValue = {
  name: "unknown",
  setWorkbookData: () => { console.log("Not implemented!"); },
  phrases: [],
};

export const AppContext = React.createContext(defaultValue);

export default AppContext;
