import React from 'react';

export const defaultValue = {
  name: "unknown",
  phrases: [],
  record: () => { console.log("Not implemented!"); },
};

export const AppContext = React.createContext(defaultValue);

export default AppContext;
