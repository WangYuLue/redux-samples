// `redux` 结合 `react-redux`，在类组件中做状态管理

import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component<{ num: number }> {
  render() {
    return <div>D Component {this.props.num}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    num: state
  }
}

export default connect(
  mapStateToProps,
  {}
)(App)
