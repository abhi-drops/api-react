import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
     <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home"className='text-light'>
          <i class="fa-solid fa-cart-arrow-down fa-bounce"></i>
           <p className='mt-3 small'>E-Cart</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
