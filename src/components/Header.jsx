import styled from "styled-components";
import elipse from "../assets/Ellipse 1.png";
import worker from "../assets/unsplash_KHO_jvns5Xc.png";

const Div = styled.div`
  gap: 15.94px;
  width: 350px;
  height: 300px;
`;

const DivC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10.63px;
  width: 90%;
  height: 94.97px;
`;

const P = styled.p`
  width: 90%;
  height: ${({ height }) => height || "76px"};
  font-family: "Rubik";
  font-style: normal;
  font-weight: ${({ fontweight }) => fontweight || 700};
  font-size: ${({ fontSize }) => fontSize || "63.7549px"};
  line-height: ${({ lineHeight }) => lineHeight || "76px"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: justify;
`;

const DivGradient = styled.div`
  width: 3.98px;
  height: 52.46px;
  background: linear-gradient(#e3e70fc4, #ff06b882);
`;

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 767px){
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  align-self: end;
`;

const Img2 = styled.img`
  width: 100%;
  height: 100%;
  align-self: end;
  top: 25px;
  left: 30px;
  z-index: 2;
  position: absolute;
`;

const Div2 = styled.div`
  position: relative;
  align-self: end;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <DivRow>
      <Div>
        <P fontweight="700">Innovation</P>
        <DivC>
          <DivGradient />
          <P fontweight="400" fontSize="42.5033px">
            Constructure
          </P>
        </DivC>
        <P
          fontweight="400"
          fontSize="9.29759px"
          lineHeight="11px"
          height="44px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
          venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
          non enim praesent
        </P>
      </Div>
      <Div2>
        <Img src={elipse} />
        <Img2 src={worker} />
      </Div2>
    </DivRow>
  );
};
export default Header;
