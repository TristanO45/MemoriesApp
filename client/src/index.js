import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import postsReducer from "./reducers/posts";

const store = configureStore({
  reducer: {
    posts: postsReducer, // Provide the postsReducer directly
  },
  middleware: [thunk],
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
