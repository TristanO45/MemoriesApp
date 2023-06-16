import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsReducer from "./reducers/posts";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// This is needed to use the makeStyles import in MUI for some dumb reason.
const theme = createTheme();



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
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
