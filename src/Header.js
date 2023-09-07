import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
 from 'react-icons/bs'
 import { FaSignOutAlt } from 'react-icons/fa';

function Header({Toggle}) {
  return (


    <nav className="navbar d-flex bg-dark text-white justify-content-between  align-items-cente navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand text-white d-none d-md-none" href="#">Navbar </a> */}
    <a className="navbar-brand text-white d-block  position-fixed " onClick={Toggle} href="#">
         <BsJustify classNameName='icon' style={{color:"white"}} />
       </a>
    <button className="navbar-toggler" style={{color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:"white"}}></span>
    </button>

   
    <div className="collapse navbar-collapse text-white justify-content-end " id="navbarText" style={{color:"white"}}>
 
      <span className="navbar-text justify-content-end">
      <FaSignOutAlt style={{color:"white"}}/>
      </span>
    </div>
  </div>
</nav>
   
  )
}

export default Header



// import React from 'react';
// import { Navbar, Nav, Container, Col } from 'react-bootstrap';
// import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

// function Header({ OpenSidebar }) {
//   return (
//     <Navbar bg="dark" variant="dark" expand="md">
//       <Container>
//         <Col md={3} className="d-md-none">
//           <BsJustify className='icon' onClick={OpenSidebar} />
//         </Col>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Item className="d-none d-md-block">
//               <Nav.Link>
//                 <BsSearch className='icon' />
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link>
//                 <BsFillBellFill className='icon' />
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link>
//                 <BsFillEnvelopeFill className='icon' />
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link>
//                 <BsPersonCircle className='icon' />
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
