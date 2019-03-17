import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Router>
        <CssBaseline>
            <Routes />
        </CssBaseline>
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();
