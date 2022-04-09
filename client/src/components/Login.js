import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'

function Login() {
    const [log, setlog] = useState(false);
    const toggleLog = () => setlog(!log);
  return (
    <>     
        <Button className='mx-1' variant='outline-light' onClick={toggleLog}>
            <AiOutlineUser className='mx-1'/>
            Login
        </Button>
        <Modal show={log} centered>
        <Modal.Header>
            <Modal.Title>Login</Modal.Title>
            <Button variant='light' onClick={toggleLog}>Close</Button>
        </Modal.Header>
        <Modal.Body>      
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control size='lg' type="email" placeholder="User name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size='lg' type="password" placeholder="Password" />
                    <Form.Text className='d-flex justify-content-end'>
                        <Link 
                        onClick={toggleLog} 
                        to={'/password-rest'}
                        style={{fontSize : '20px', color : 'cadetblue'}}
                        >Forgot your password?</Link>
                    </Form.Text>
                    <Form.Text className='d-flex justify-content-end'>
                        <Link 
                        onClick={toggleLog} 
                        to={'/register'}
                        style={{fontSize : '20px', color : 'cadetblue'}}
                        >Register Now!</Link>
                    </Form.Text>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit"> Submit </Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}

export default Login