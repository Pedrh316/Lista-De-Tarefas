import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {


    return (
        <Router>                
            <Header/>
            <div className="container">
                <Main/>                
            </div>
        </Router>
    )
}

export default App;