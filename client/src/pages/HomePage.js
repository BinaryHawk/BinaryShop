import React from 'react'
import { Col, Row } from 'react-bootstrap'
import  Products from "../MOCK_DATA.json";
import Product from '../components/Product'

function HomePage() {
  return (
    <>
      <h1> Welcome to BinaryShop</h1>
      <Row>
          {Products.map((Prod) => (
            <Col key={Prod.id} sm='12' md='6' lg='4' xl='3'>
              <Product prod={Prod}/>
            </Col>
          ))}
      </Row>
    </>
  )
}

export default HomePage