import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import HelloWorld from "../../components/helloWorld";
import logo from "../../content/images/logo.svg";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import "../../content/App.scss";
const Test = styled("div")`
    background-color: red;
    width: 50px;
    height: 50px;
`;

const Home = () => {
    return (
        <div className="App">
            <CssBaseline>
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
            </CssBaseline>
        </div>
    );
};

export default Home;
