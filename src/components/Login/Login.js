import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {

    // if email change
    const [userEmail, setUserEmail] = useState('');

    // if login success show success message, by default false
    const [success, setSuccess] = useState(false);

    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = event => {
        setPasswordError('');

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                setSuccess(true);
            })
            .catch(error => {
                console.error('error', error);
                setSuccess(false);
                setPasswordError(error.message);
            })

    }

    // Forget Password
    const handleForgetPassword = () => {

        // jodi user er email na thake tobe
        if(!userEmail){
            alert('Please enter your email')
        }
        sendPasswordResetEmail(auth, userEmail)
        .then( () => {
           alert('Password Reset email sent. Please check your email.')
        })
        .catch( error =>{
            console.error(error);
        })
    }

    const handleEmailBlur = event => {
        const email = event.target.value;

        // jokhon oita blur kore felbe tkhn ami email ta set kore felbo
        setUserEmail(email);
        console.log(email);
    }

    return (
        <div>
            <h3 className='text-center text-primary'>Please Login</h3>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail" required>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{passwordError}</p>

                <p className='text-primary'>
                    {success && <span>Successfully login</span>}</p>

                <Button variant="primary" type="submit">
                    Login
                </Button>


                <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>

                <p><small>
                    Forget password? <button type='button' onClick={handleForgetPassword} className='btn btn-link'>Reset Password</button></small></p>
            </Form>
        </div>
    );
};

export default Login;