import Header from "./Header";
import Navbar from "./Navbar";
import styled from "styled-components";
import rectanglecinco from "../assets/Rectanglecinco.png";

const Div = styled.div`
  background-image: linear-gradient(rgba(6, 5, 57, 0.83), rgba(6, 5, 57, 0.83)),
    url(${rectanglecinco});
  background-size: cover;
  height: 600px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = () => {
  return (
    <Div>
      <Navbar />
      <Header id='home'/>
    </Div>
  );
};
export default Hero;
