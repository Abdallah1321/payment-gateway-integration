import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const NavBar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Payment Gateway Integration With Paypal</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
