import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../Styling/home.css'
import Stack from 'react-bootstrap/Stack';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import twitter from '../Assets/twitter.png'

import logo from '../Assets/logo.png'




const Home = () => {
  return (
    <>
    <Container fluid className='landinginfo'>

      
      
     
     {/* Navigation Bar  */}
      {/* <Nav className="justify-content-end">
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

         
          
      </Nav> */}

      {/* Navigation Bar  */}


      <Row className='centerrow'>
        

        <Col lg={11} className='d-flex justify-content-center'>
          <img src={logo} className='logo' alt ='logo'/>

          <div className='mt-3'>
            <h3 className='title1 text-start'>AFRO</h3>
            <h1 className='title2 text-start'>GENESYS</h1>

          </div>
        </Col>
      </Row>

      



    </Container>
    
    </>
  )
}

export default Home