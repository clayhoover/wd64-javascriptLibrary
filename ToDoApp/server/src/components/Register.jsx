import React, { useSate } from 'react';
import { Form, Button, Input, FormGroup, Label } from 'reactstrap';

import "../styles/Register.css";

const RegisterComponent = (props) => {

    // Challenge: Create the State Variables for the input fields

    const [ email, setEmail ] = useState('');
    const [ password, setPasswrd ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');

    // Challenge: Create the helper functions for the input guide

    const triggerEmailInputChange = (event) => setEmail(event.target.value);
    const triggerPasswordInputChange = (event) => setPasswrd(event.target.value)
    const triggerPasswordConfirmInputChange = (event) => setPasswordConfirm(event.target.value);

    // Challenge: Create the submit event functions that POSTS to the registration route,
    // Think about how to handle a token

    const handleUserRegistration = (event) => {
        event.preventDefault();
        // Procedure: Verify there is an email and password
        // Password and Confirm must match
        // Register the user using a FETCH -> {server}/user/register
        if (email && password) {
            if (password === passwordConfirm) {
                // Register the user
                fetch('http://localhost:8080/user/register', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then(response => response.json())
                  .then(() => {
                      console.log("User is registered");
                      // Todo: Add login automatically
                  })
                  .catch(error => console.log(error));
            } else {
                // Todo: Tooltip instead of alert!!!
                alert('Passwords MUST match!');
            }
        }
    };

    return (
        <div className="authForm" id="registerForm">
        <Form onSubmit={handleUserRegistration}>
            <h3>Registration</h3>
            <FormGroup>
                <Label htmlFor="registerEmail">Email:</Label>
                <Input id="registerEmail" type="email" name="registerEmail" onChange={triggerEmailInputChange} value={email} />
            </FormGroup>
            <FormGroup>
                <label htmlFor="registerPassword">Password:</label>
                <Input id="registerPassword" type="password" name="registerPassword" onChange={triggerPasswordInputChange} value={email} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="registerConfirmPassword">Password Confirm:</Label>
                <Input id="registerConfirmPassword" type="password" name="registerConfrimPassword" onChange={triggerPasswordConfirmInputChange} value={password}  />
            </FormGroup>
            <Button>Register</Button>
        </Form>
        </div>
    );
};

export default RegisterComponent;


/*
                <Form>
                    <h3>Register</h3>
                    <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input onChange={ triggerEmailInputChange } value={email} type="email" name="email"   />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlfor="password">Password:</Label>
                        <Input onChange={ triggerPasswordInputChange } value={password} id="password" type="password" name="password" />
                    </FormGroup>
                    <Button>Register</Button>
                </Form>
            
                );
            };
*/