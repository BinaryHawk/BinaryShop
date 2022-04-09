import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'


function Product({prod}) {
  return (
    <>  
    <Card style={{}}>
        <Link to={`/products/${prod.id}`}>
            <Card.Img variant="top" src={prod.image}  style={{height : '300px'}}/>
        </Link>
        <Card.Body>
            <Link  to={`/products/${prod.id}`}>
            <Card.Title as='div' style={{height : '30px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {prod.name}
            </Card.Title>
            </Link>
            <Card.Text as='div' style={{height : '50px',  overflowY: 'hidden', textOverflow: 'ellipsis'}}>
                {prod.desc}
            </Card.Text>
            <Card.Text>
                <Rating rate={prod.rating} reviewsNumber={prod.views}/>
            </Card.Text>
            <h3>$ {prod.price}</h3>
        </Card.Body>
    </Card>
    </>
  )
}

export default Product

