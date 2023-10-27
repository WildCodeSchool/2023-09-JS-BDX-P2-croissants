import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/NavBar.scss";
import logo from "../assets/logo.png";

function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <Navbar expand="md" className="navbar-custom" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/about">À propos</Nav.Link>
            <Nav.Link href="/quizz">Quizz</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2 search-input"
              aria-label="Search"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default NavBar;
