import React, { useState } from "react";
import {
    BrowserRouter,
    Switch,
    Route,

} from 'react-router-dom';
import "./App.css";

import NavbarComponent from './components/Navbar';
import LogInComponent from './components/Login';


function App() {

    const [ authenticationJWT, changeAuthJWT ] = useState("");

    // ToDo: Load up the auth token if it is stored locally (on startup);

    const authenticateUser = (token) => {
        // Purpose: Save JWT locally, and in the browser.
        window.localStorage.setItem("authToken", token)
        // Challenge: Use the "State Change" function to set the new token in the state
        changeAuthJWT(token);
    }

    return (
        <BrowserRouter>
            <div className="App">
                <NavbarComponent />
                <Switch>
                    <Route path="/login">
                        <LogInComponent authenticateUser={authenticateUser} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default App;