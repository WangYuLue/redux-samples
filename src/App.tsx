import React from 'react';
import A from './containers/A'
import B from './containers/B'
import C from './containers/D'
import D from './containers/C'
import Z from './containers/Z'
import { Provider } from 'react-redux'
import { store } from './store'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <A />
        <B />
        <C />
        <D />
        <Z />
      </div>
    </Provider>
  )
}