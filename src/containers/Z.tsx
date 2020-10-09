import React from 'react';
import { store } from '../store';

function action1() {
  return (dispatch) => {
    dispatch({ type: 'INCREMENT' })
    setTimeout(() => {
      dispatch({ type: 'DECREMENT' })
    }, 1000)
  }
}

export default function App() {
  const onClick = () => {
    // 使用 redux-chunk 中间件后，这种写法能生效
    store.dispatch(action1())
    // 如果没有使用 redux-chunk 中间件，可以使用以下的写法
    // action1()(store.dispatch);
  }
  return (<div>
    <button onClick={onClick}>测试</button>
  </div>);
}