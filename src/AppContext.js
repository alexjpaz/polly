import React from 'react';

import data from './datasources/foo.json';

export const defaultValue = {
  name: data.name,
  setWorkbookData: () => { console.log("Not implemented!"); },
  phrases: data.phrases,
};

export const AppContext = React.createContext(defaultValue);

export class DefaultAppContextProvider extends React.Component {
  state = defaultValue;

  componentDidMount() {
    let state = this.state;

    state.setWorkbookData = ({ name, phrases }) => {
      this.setState({
        ...this.state,
        name,
        phrases,
      });
    };

    this.setState(state);
  }

  render() {
    const state = this.state;

    return (
      <AppContext.Provider value={state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContext;
