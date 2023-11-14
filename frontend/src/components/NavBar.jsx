import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FilterContext } from "../context/FilterContext";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

function NavBar() {
  const { searchTerm, setSearchTerm } = useContext(FilterContext); // This is the context that will be used in this component

  return (
    <Navbar expand="md" className="navbar-custom" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/quizz">Quizz</Link>
            <Link to="/favorites">Favorite</Link>
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

export default NavBar;
