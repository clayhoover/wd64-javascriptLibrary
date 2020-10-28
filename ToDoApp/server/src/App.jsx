import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Switch,
    Route,

} from 'react-router-dom';
import "./App.css";

import NavbarComponent from './components/Navbar';
import LogInComponent from './components/Login';
import RegisterComponent from '/components/Register';
import ListsComponent from './components/Lists';


function App() {

    const [ authenticationJWT, changeAuthJWT ] = useState("");

    /*
    UseEffct Notes:
    1) If you make a useEffect without the array, it will fire each time the app is rendered to the screen
    2) If you have an empty array in the useEffect, it will fire only when the component is first MOUNTED to the screen
    3) If you inlcude a dependency in the array, it will fire when that dependeny is updated
    */

    useEffect(() => {
        if(window.localStorage.getItem('authToken')) {
            console.log("abc");
            changeAuthJWT(window.localStorage.getItem('authToken'));
        }
    }, [])

    // ToDo: Load up the auth token if it is stored locally (on startup); @

    const authenticateUser = (token) => {
        // Purpose: Save JWT locally, and in the browser.
        window.localStorage.setItem("authToken", token)
        // Challenge: Use the "State Change" function to set the new token in the state
        changeAuthJWT(token);
    }

    return (
        <BrowserRouter>
            <div className="App">
                <NavbarComponent isLoggedIn={authenticationJWT} />
                <Switch>
                    <Route path="/login">
                        <LogInComponent authenticateUser={authenticateUser} />
                    </Route>
                    <Route exact path="/register">
                        <RegisterComponent />
                    </Route>
                    <Route exact path="/mylists">
                        <ListsComponent token={authenticationJWT} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default App;