// `redux` 结合 `react-redux`，在方法组件中做状态管理

import React from 'react';
import { useSelector } from 'react-redux';

export default function App() {
  const res = useSelector((state: any) => state)
  return <div>C Component {res}</div>
}