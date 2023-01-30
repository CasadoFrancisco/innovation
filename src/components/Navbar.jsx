import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/Flutterwave.png";
import menu from "../assets/Menu.png";

export const Logo = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 22px;
  left: 27px;
  background-image: url(${logo});
`;

const BotonMenu = styled.div`
  position: absolute;
  left: 15%;
  right: 15%;
  top: 20%;
  bottom: 20%;
  width: 24px;
  height: 24px;
  left: 370px;
  top: 38px;
  background-image: url(${menu});
  background-size: 24px;
  background-repeat: no-repeat;
  @media (min-width: 767px){
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 366px;
  height: 33px;
  
  @media (max-width: 767px) {
    transform: translateY(${ props => props.isOpen ? "0vh" : "-100vh" });
    transition: 1s;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    gap: 1.5rem;
    background-color: #000000e1;
    position: fixed;
    z-index: 1;
  }
`;

const Button = styled.button`
  @media (min-width: 767px){
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Logo src={logo} alt="img" />

      {!isOpen ? <BotonMenu onClick={() => setOpen(!isOpen)} /> : null}
      <Nav isOpen={isOpen}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <Button onClick={() => setOpen(false)}>X</Button>
      </Nav>

    </div>
  );
};
export default Navbar;
