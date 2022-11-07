import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {

    // Regular Expression (Regex) check for password
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = event => {

        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        // Regex
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please add at least one special character')
            return;
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setPasswordError('Please provide at least one digit')
            return;
        }
        if (!/.{8}/.test(password)) {
            setPasswordError('Password should be at least 8 characters')
            return;
        }

        // jodi kono error na khay
        setPasswordError('');




        // firebase system
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                {/* show error text */}
                <p className='text-danger'>{passwordError}</p>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReactBootstrap;