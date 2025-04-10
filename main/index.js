/*
 * @Author: huayou.fu 
 * @Created date: 2022-01-04 16:46:13 
 */
import React from "react";
import { createRootStack } from "./navigate";
export default class App extends React.PureComponent {
  render() {
    const Root = createRootStack('RootLoading');
    return <Root />;
  }      
}