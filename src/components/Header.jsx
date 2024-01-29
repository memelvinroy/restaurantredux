import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice'

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>FOOD CIRCLE</Link>
            </Navbar.Brand>
            <div className="d-flex align-items-center" style={{marginRight:'30%'}}>
            <input
              type="text"
              onChange={(e) => dispatch(search(e.target.value))}
              className="form-control me-2"
              style={{ width: '400px' }}
              placeholder='Search'
            />
          </div>
            
          {/* <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#features" className='text-light'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>

      
    </>
  )
}

export default Header