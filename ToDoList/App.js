import React from 'react';
import { createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';
import AppNavigator from "app/src/navigations/index";

import ConfigureStore from "app/Store/ConfigureStore"//'app/Store/ConfigureStore';

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component 
{
  render() {
    return (
      <Provider  store={ConfigureStore}>
      <AppContainer />
    </Provider>
    );
  }
}