import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../logo.svg";
import CartWidget from "./CartWidget";
import "./CartWidget.css";

const NavBar = () => {
  return (
    <Navbar className="navBar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Coder Records
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <NavDropdown title="Productos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#turntables">Bandejas</NavDropdown.Item>
            <NavDropdown.Item href="#albums">Discos</NavDropdown.Item>
            <NavDropdown.Item href="#monitors">Monitores</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about">Nosotros</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
