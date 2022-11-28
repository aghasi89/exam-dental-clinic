import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Content from "./App";
import {Provider} from "react-redux"
import store from "./redux/store"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store ={store}>
  <StrictMode>
    <Content />
  </StrictMode>
  </Provider>
);