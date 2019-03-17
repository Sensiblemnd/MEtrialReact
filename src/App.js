//@flow
import React, { Component } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import HelloWorld from "./components/helloWorld";
import logo from "./content/images/logo.svg";
import Button from "@material-ui/core/Button";

import "./content/App.scss";
const Test = styled("div")`
    background-color: red;
    width: 50px;
    height: 50px;
`;

class App extends Component {
    render() {
        return (
            <div className="App">
                <HelloWorld />
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <Test>test</Test>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload. Hola te amo mi amor
                </p>
            </div>
        );
    }
}

export default App;
