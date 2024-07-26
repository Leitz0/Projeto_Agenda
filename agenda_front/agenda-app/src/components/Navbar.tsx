import React from 'react';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
        <img src="/logoAgenda.png" alt="logo" width="100" height="100" className="d-inline-block align-text-top"/>
      <BootstrapNavbar.Brand as={Link} to="/">
        Lista de Contatos
      </BootstrapNavbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/create">
          Criar Contato
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;