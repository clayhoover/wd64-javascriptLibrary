// const React = require('react');

import React, { useState } from 'react';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap';

// Challenge
// Create 2 state variables, and wire up the two input fields with the state variables

// TODO: Build functionality to send info to the api

const LogInComponent = (props) => {

    console.log(props.authenticateUser):

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const triggerEmailInputChange = (event) => {
        setEmail(event.target.value);
    };

    const triggerPasswordInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Login triggered");
        console.log(email, password);
    };

    return (
    <Form>
        <h3>Login</h3>
        <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input onChange={ triggerEmailInputChange } value={email} type="email" name="email"   />
        </FormGroup>
        <FormGroup>
            <Label htmlfor="password">Password:</Label>
            <Input onChange={ triggerPasswordInputChange } value={password} id="password" type="password" name="password" />
        </FormGroup>
        <Button>Login</Button>
    </Form>

    );
};

// Challenge: Create a LOGIN form that has 2 inputs
// input1: Email
// input2: Password
// take note: for == htmlFor

// import your component into the app.js
// MOUNT the component in the App component

// module.exports = LogInComponent;
export default LogInComponent;