// 单纯使用 `redux`，在方法组件中做状态管理

import React, { useEffect, useState } from 'react';
import { store } from '../store';

export default function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    store.subscribe(() => setNum(store.getState()))
  }, []);

  return <div>A Component {num}</div>
}