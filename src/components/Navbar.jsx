import React, { useState } from 'react';
// Router
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Bootstrap
import { Navbar, Container, Nav, Form, Button, NavDropdown } from 'react-bootstrap';

// Redux
import { useDispatch } from 'react-redux';
import { filterCategory, filterDiscount, handleSearch } from '../state/slices/ShopSlice';

const NavbarComponent = () => {

  const dispatch=useDispatch();
  const [searchTerm, setSearchTerm]=useState('');
  const navigate=useNavigate()

  const searchProducts=()=>{
    dispatch(handleSearch(searchTerm));
    setSearchTerm('');
    navigate('/')
  }

  const [show, setShow]=useState(false);


  return (

    <Navbar expanded={show}
    className='navbar-dark bg-dark navbarComponent' expand="lg">
      <Container >
        <Link to='/'>
          <Navbar.Brand
            olClick={()=>dispatch(filterCategory("all"))}
           href="#">Al<span className='text-warning'>Ver</span></Navbar.Brand>
        </Link>
        <Navbar.Toggle
            onClick={()=>setShow(!show)}
            aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav 
            className="me-auto my-2 my-lg-0 "
            navbarScroll>
            <NavLink 
            onClick={()=>setShow(false)}
            className='nav-link' to='/' >
                Home
            </NavLink>
            <NavLink 
            onClick={()=>setShow(false)}
            className='nav-link' to='/cart' >
                Cart
            </NavLink>
            <NavLink 
            onClick={()=>setShow(false)}
            className='nav-link' to='/favorites' >
                Favorites
            </NavLink>
            
            <NavDropdown
            onSelect={()=>setShow(false)}
             title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("clothing"))}
              >
                <Link className='text-dark' to='/'>
                Clothing
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("sport"))}
              >
                <Link className='text-dark' to='/'>
                Sport
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("parfumery&cosmetics"))}
              >
                <Link className='text-dark' to='/'>Parfumery & Cosmetics</Link>
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("baby"))}
              >
                <Link className='text-dark' to='/'>Baby Care</Link>
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("accessories"))}
              >
                <Link className='text-dark' to='/'>Accessories</Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("electronics"))}
              >
                <Link className='text-dark' to='/'>Electronics</Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("music"))}
              >
                <Link className='text-dark d-block' to='/'>Music</Link>     
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("home"))}
              >
                <Link className='text-dark' to='/'>Home & Decoration</Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("animal"))}
              >
                <Link className='text-dark' to='/'>Zoo</Link>
                
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
              onClick={()=>dispatch(filterCategory("all"))}>
                <Link className='text-dark' to='/'>All</Link>
              </NavDropdown.Item>

              <NavDropdown.Item 
              onClick={()=>dispatch(filterDiscount())}
              >
                <Link className='text-dark' to='/'>Discounted Products</Link>
                
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink 
            onClick={()=>setShow(false)}
            className='nav-link' to='/about' >
                About
            </NavLink>
            
          </Nav>
          <Form className="d-flex ">
            <div className="input-group">
            <Form.Control
              type="search"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              placeholder="Search"
              className=" bg-dark text-light"
              aria-label="Search"
            />
            <Button 
            onClick={searchProducts}
            variant="outline-warning">Search</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent ;
