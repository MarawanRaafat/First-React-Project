import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default function Signup() {
  return (
    <>
      <div className='contaner-of-form'>


        <h2>Hardest move is the first one 👍</h2>



        <Form className='text-light-emphasis'>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button className='sub-btn' variant="light" type='submit'>sign up</Button>

        </Form>


        <a href="/">Login page</a>



      </div>

    </>

  )
}
