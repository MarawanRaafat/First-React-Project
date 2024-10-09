import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';




export default function Loginform() {
    return (

        <>
            <div className='contaner-of-form'>


                <h1>Welcome 👋</h1>

                <p >
                    Be Better Than Ysterday by mangment your life😉
                </p>

                <Form className='text-light-emphasis'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className='sub-btn' variant="light" type='submit'>Make your first Step</Button>

                </Form>
                <a href="#">Forgot Password?</a>
                <div className='or-div'>
                    <span className='line'> </span>
                    <span className='or'> or</span>
                    <span className='line-2'> </span>
                </div>


                <button className="sec-btn"> <span class="Google"> </span>Sign in with Google</button>
                <button className="sec-btn"> <span class="Facebook"></span>Sign in with Facebook</button>

                <p>Don't you have an account? <a href="/signin">Sign up</a>
                </p>


            </div>

        </>



    )
}

