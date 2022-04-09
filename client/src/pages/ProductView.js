import React from 'react'
import { Col, Container, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Products from  '../MOCK_DATA.json'
import  Rating  from "../components/Rating.js";



function ProductView(props ) {
  let {id} = useParams()
  const product = Products.find((p) => (p.id == id))

  return (
    <>
      <Container>
        <Row>
          <Col sm='12' md='6'>
            <Image fluid src={product.image} />
          </Col>
          <Col sm='12' md='3'>
          <ListGroup variant='flush'>
            <ListGroupItem><h4>{product.name}</h4></ListGroupItem>
            <ListGroupItem><h6>Brand: {product.brand}</h6></ListGroupItem>
            <ListGroupItem><Rating rate={product.rating} reviewsNumber={product.views}/></ListGroupItem>
            <ListGroupItem><h5>Price: $ {product.price}</h5></ListGroupItem>
            <ListGroupItem>Description: <p>{product.desc}</p> </ListGroupItem>
          </ListGroup>
          
          
          
             
          </Col>
          <Col sm='12' md='3'>
            <h6>Purchase NOW!</h6>
            
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductView