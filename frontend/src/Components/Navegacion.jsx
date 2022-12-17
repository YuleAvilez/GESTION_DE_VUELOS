import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import "../assets/Css/Navegacion.css"
const Navegacion = () => {
  return (


<div>
  
<>
      <Navbar className='contenedor'>
        <Container>
          <Nav className="me-auto">
          <LocalAirportIcon className= "logo"sx={{ fontSize: 51 }}/>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="acerca-de">Acerca de</Nav.Link>
            <Nav.Link href="Contactos">Contactanos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    <NavLink to= "/">
   
    </NavLink>

<div>
  <NavLink to= "acerca-de">
    
  </NavLink>
  
</div>
      <div>
      <NavLink to= "Contactos">
       
      </NavLink>
      </div>

   </div>
 
    
    
    


  )
}

export default Navegacion