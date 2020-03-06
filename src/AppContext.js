import React from 'react';

export const defaultValue = {
  name: "unknown",
  workbookLoaderDialogIsOpen: false,
  setWorkbookData: () => { console.log("Not implemented!"); },
  phrases: [],
};

export const AppContext = React.createContext(defaultValue);

export default AppContext;
