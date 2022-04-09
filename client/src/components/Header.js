import React from 'react'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { LinkContainer } from "react-router-bootstrap";

import Login from "../components/Login";


function Header() {
  return (
    <Navbar bg="primary" variant="dark" sticky='top' >
        <Container>
          <LinkContainer to={`/`}>
            <Navbar.Brand>BinaryShop</Navbar.Brand>
          </LinkContainer>
        <Nav className="ml-auto">
          <LinkContainer to={'/Cart'}>
            <Button className='mx-1' variant='outline-light'>
              <AiOutlineShoppingCart className='mx-1'/>
              Cart
            </Button>
          </LinkContainer>
          <Login/>
        </Nav>
        </Container>
    </Navbar>
  )
}

export default Header