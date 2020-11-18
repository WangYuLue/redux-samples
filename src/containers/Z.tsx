import React from 'react';
import { store } from '../store';

function myAction(message: string) {
  return (dispatch) => {
    dispatch({ type: 'INCREMENT', message })
    setTimeout(() => {
      dispatch({ type: 'DECREMENT', message })
    }, 1000)
  }
}

export default function App() {
  const onClick = () => {
    // 使用 redux-chunk 中间件后，这种写法能生效
    store.dispatch(myAction('loading'))
    // 如果没有使用 redux-chunk 中间件，可以使用以下的写法
    // myAction('loading')(store.dispatch);
  }
  return (<div>
    <button onClick={onClick}>测试</button>
  </div>);
}