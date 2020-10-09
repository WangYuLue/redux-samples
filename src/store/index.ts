import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter, applyMiddleware(ReduxThunk));
// const store = createStore(counter);

export {
  store
}