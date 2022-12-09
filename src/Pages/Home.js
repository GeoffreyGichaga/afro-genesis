import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../Styling/home.css'










const Home = () => {
  return (
    <>
    <Container fluid id='landingcont'>
     
     {/* Navigation Bar  */}
      <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href='#' className='navlinks' >Home</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='#' className='navlinks'>About</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='#' className='navlinks'>Team</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='#' className='navlinks'>Products</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='#' className='navlinks'>Contact</Nav.Link>
          </Nav.Item>

         
          
      </Nav>

      {/* Navigation Bar  */}



    </Container>
    
    </>
  )
}

export default Home