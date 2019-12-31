import React from 'react';

export const defaultValue = {
  name: "unknown",
  phrases: [],
};

export const AppContext = React.createContext(defaultValue);

export default AppContext;
