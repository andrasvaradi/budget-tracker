import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { reducer } from "./Store/reducers/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const persistConfig = {
  key: 'root',
  storage: storage,
}
const theme = extendTheme({
  colors: {
    custom: {
      navbar: "#63ba00",
      navtext: "#f1f9e8",
      boxtop: "#00586b",
      text: "#3e937c",
      savingLink: "#82c833",
      background: "#f5f8fc"
    }
  },
})

const pReducer = persistReducer(persistConfig, reducer)

const middleware = applyMiddleware(ReduxThunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
