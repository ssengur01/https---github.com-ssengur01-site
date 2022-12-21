import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai"


const Naav = () => {
    const menus = [

    ]
 
    return (
        <div>
            <Navbar expand="lg" className='fixed-top'>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className="text-uppercase">


                          Coder ECommerce

                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScrool" />
                    <Navbar.Collapse id="navbarScrool">
                       <Nav className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}    
                            navbarScroll>

                        {
                            menus.map((menu)=>(
                                <NavLink
                                key={menu.id}
                                to={menu.path} >
                                {menu.name}
                                </NavLink>

                            ))
                            
                        }    
                             <NavLink
                                to="/cart">
                                    <AiOutlineShoppingCart size={23}/>{" "}
                                    <div className=''>
                                             <h6>5</h6>
                                    </div>

                             </NavLink>
                        
                       </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Naav;


