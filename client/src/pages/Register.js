import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from 'axios'

function Register() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })
  const infoHandler = (event)=>{
    const tempUserInfo = {...userInfo} ;
    tempUserInfo[event.target.id] = event.target.value;
    setUserInfo(tempUserInfo);
    console.log(userInfo)
  }

  const submit = (event)=>{
    event.preventDefault();
     axios.post('http://localhost:5000/', {title : 'test'}) 
     .then(res => console.log(res)) 
  }
  return (
    <>  
    <Container>
    <Row className='justify-content-center'>
        <Col sm={12} md={6} >
             <Form>
                <Form.Group className="mb-3">
                      <h1>Registration</h1>
                      <Form.Control 
                      id='email'
                      size='lg' 
                      type="email" 
                      placeholder="User name" 
                      value={userInfo.username}
                      onChange={(info) => infoHandler(info)}
                      required/>
                    <Form.Control 
                      id='password'
                      size='lg' 
                      type="password" 
                      placeholder="Password" 
                      value={userInfo.password}
                      onChange={(event) => infoHandler(event)}
                      required/>
                    <Form.Control size='lg' type="password" placeholder="Confirme password" required/>
                </Form.Group>
                <Button 
                variant="primary" 
                type="submit" 
                onClick={(event)=> submit(event)}> Submit </Button>    
            </Form> 
        </Col> 
    </Row>
    </Container>
                
    </>
  )
}

export default Register