import React from "react";
import { createRoot } from "react-dom/client";

import { Main } from "./components";
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store  from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
        
        <Provider store={store}>
                <Router>
                        <Main />
                </Router>
        </Provider>
        
);

// 1. Do not understand why Router/Provider/Main has red underline and why Router is not turning green...