import Header from "./Header";
import Navbar from "./Navbar";
import styled from "styled-components";
import rectanglecinco from "../assets/Rectanglecinco.png";
import fondo from "../assets/fondo.jpg";

const Div = styled.div`
  background-image: linear-gradient(rgba(6, 5, 57, 0.83), rgba(6, 5, 57, 0.83)),
    url(${rectanglecinco});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  @media (min-width: 767px) {
    background-image: linear-gradient(
        rgba(6, 5, 57, 0.83),
        rgba(6, 5, 57, 0.83)
      ),
      url(${fondo});
  }
`;

const DivHeader = styled.div`
  display: flex;
  max-width: 1000px;
  height: 100%;
  align-items: center;
  justify-content: start;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const Hero = () => {
  return (
    <Div>
      <Navbar />
      <DivHeader>
        <Header id="home" />
      </DivHeader>
    </Div>
  );
};
export default Hero;
