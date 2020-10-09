// 单纯使用 `redux`，在类组件中做状态管理

import React, { Component } from 'react';
import { store } from '../store';

export default class App extends Component {
  state = {
    num: 0
  }

  componentDidMount() {
    store.subscribe(() => this.setState({ num: store.getState() }))
  }

  render() {
    return <div>B Component {this.state.num}</div>
  }
}