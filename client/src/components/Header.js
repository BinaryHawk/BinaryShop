import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {AiOutlineShoppingCart, AiOutlineUser, AiOutlineHome} from 'react-icons/ai'

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">BinaryShop</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#features" ><AiOutlineShoppingCart className='mx-1 mb-1'/>Cart</Nav.Link>
            <Nav.Link href="#pricing"><AiOutlineUser className='mx-1 mb-1'/>Login</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  )
}

export default Header