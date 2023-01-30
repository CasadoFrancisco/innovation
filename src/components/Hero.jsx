import Header from "./Header";
import Navbar from "./Navbar";
import styled from "styled-components";
import rectanglecinco from "../assets/Rectanglecinco.png";

const Div = styled.div`
  background-image: linear-gradient(rgba(6, 5, 57, 0.83), rgba(6, 5, 57, 0.83)),
    url(${rectanglecinco});
  background-size: cover;
  height: 600px;
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

// <a href="#NombreID">enlace a NombreID</a>

// <p id="NombreID" style={{ color: "black" }}>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
//   recusandae, fuga necessitatibus ipsam eveniet neque error nihil unde
//   voluptatum doloribus totam aut, dolorem cupiditate repudiandae
//   accusantium el
// </p>
