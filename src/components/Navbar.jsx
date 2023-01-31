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
  width: 24px;
  height: 24px;
  left: 85%;
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
  width: 100vw;
  height: 33px;
  
  @media (max-width: 767px) {
    transform: translateY(${ props => props.isOpen ? "0vh" : "-100vh" });
    transition: 0.5s;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    gap: 1.5rem;
    left: 0;
    background-color: #000000e1;
    position: absolute;
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
        <a onClick={() => setOpen(false)} href="#home">Home</a>
        <a onClick={() => setOpen(false)} href="#about">About</a>
        <a onClick={() => setOpen(false)} href="#members">Members</a>
        <Button onClick={() => setOpen(false)}>X</Button>
      </Nav>

    </div>
  );
};
export default Navbar;
