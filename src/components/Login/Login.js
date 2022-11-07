import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email;
        const password = form.password;
    }
    return (
        <div>
            <h3 className='text-center text-primary'>Please Login</h3>
            <Form onClick={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            </Form>
        </div>
    );
};

export default Login;