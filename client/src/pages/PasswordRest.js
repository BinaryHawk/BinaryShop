import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
function PasswordRest() {
  return (
    <>
    <Container>
        <Row>
            <Col className='sm-12 md-6 d-flex justify-content-center'>
                <Form>
                    <Form.Group className="mb-3" controlId="">
                        <h1 className='my-4'>Recoverying Your Accout</h1>
                        <Form.Label>Enter your email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default PasswordRest