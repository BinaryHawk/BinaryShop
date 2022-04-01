import React from 'react'
import { Col, Row } from 'react-bootstrap'
import  Products from "../MOCK_DATA.json";

function HomePage() {
  return (
    <>
        <Row>
            {Products.map((Prod) => (
                <Col sm={12} md={6} lg={4} xl={3} style={{border : '2px solid'}} >
                    <img src={Prod.image} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomePage