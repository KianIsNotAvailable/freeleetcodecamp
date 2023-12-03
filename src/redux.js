// redux/store.js
import { createStore } from 'redux';

// Define reducer
const rootReducer = (state = { buttonState: 'Initial Value' }, action) => {
  switch (action.type) {
    case 'UPDATE_BUTTON_STATE':
      return { ...state, buttonState: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export default store;
