import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux'; // Import your Redux store
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PopupProvider } from './components/popupContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PopupProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PopupProvider>
  </Provider>
);

reportWebVitals();
