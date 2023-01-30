import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15.94px;
  position: absolute;
  width: 399.13px;
  height: 290.07px;
  left: 14.22px;
  top: 122px;
`;

const DivC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6.64114px 6.64114px 6.64114px 42.5033px;
  gap: 10.63px;
  width: 399.13px;
  height: 94.97px;
`;

const P = styled.p`
  width: 399.13px;
  height: ${({ height }) => height || "76px"};
  font-family: "Rubik";
  font-style: normal;
  font-weight: ${({ fontweight }) => fontweight || 700};
  font-size: ${({ fontSize }) => fontSize || "63.7549px"};
  line-height: ${({ lineHeight }) => lineHeight || "76px"};
  display: flex;
  align-items: center;
  color: #ffffff;
  text-align: justify;
`;

const DivGradient = styled.div`
  width: 3.98px;
  height: 52.46px;
  background: linear-gradient(#e3e70fc4, #ff06b882);
`;

const Header = () => {
  return (
    <Div>
      <P fontweight="700">Innovation</P>
      <DivC>
        <DivGradient />
        <P fontweight="400" fontSize="42.5033px">
          Constructure
        </P>
      </DivC>
      <P fontweight="400" fontSize="9.29759px" lineHeight="11px" height="44px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
        lectus magna fringilla urna, porttitor rhoncus dolor purus non enim
        praesent
      </P>
    </Div>
  );
};
export default Header;
