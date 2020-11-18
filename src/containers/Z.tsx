import React from 'react';
import { store } from '../store';

function myAction(dispatch) {
  dispatch({ type: 'INCREMENT' })
  setTimeout(() => {
    dispatch({ type: 'DECREMENT' })
  }, 1000)
}


export default function App() {
  const onClick = () => {
    // 使用 redux-chunk 中间件后，这种写法能生效
    store.dispatch(myAction)
    // 如果没有使用 redux-chunk 中间件，可以使用以下的写法
    // myAction(store.dispatch);
  }
  return (<div>
    <button onClick={onClick}>测试1</button>
  </div>);
}