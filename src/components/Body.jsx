import React from "react";
import styled from "styled-components";
import fotoSuperior1 from "../assets/fotosuperior1.png";
import fotoSuperior2 from "../assets/fotosuperiorr2.png";
import fotoinferior from "../assets/fotoinferior.png";

const DivBody = styled.div`
@media (max-width:767px){
  width: 100%;
  height: 100%;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
  
`;
const DivImag = styled.div`
@media (max-width:767px){
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 390px;
  height: 530px;
}
  
`;
const DivImgSuperior = styled.div`
@media (max-width:767px){
  position: relative;
}
  
`;
const ImgSuperior1 = styled.img`
@media (max-width:767px){
  width: 281px;
  height: 324.82px;
}
  
`;
const ImgSuperior2 = styled.img`
@media (max-width:767px){
  width: 281px;
  height: 324.82px;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
}
  
`;
const DivImgInferior = styled.div`
@media (max-width:767px){
  position: absolute;
  bottom: 0;
  right: 0;
}
  
`;

const ImgInferior = styled.img`
@media (max-width:767px){
  width: 238.47px;
  height: 307px;
  margin-left: 20px;
}
  
`;

const DivContainerInfo = styled.div`
  
`;
const DivContainerSubTitle = styled.div`
@media (max-width:767px){
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 40px;
  margin-left: 1px;
  margin-top: 10px;
}
  
`;
const SubTitleLine = styled.hr`
@media (max-width:767px){
  width: 39px;
  margin-left: 10px;
  background-image: linear-gradient(to bottom, #e2e70f, #ff06b9);
  height: 2px;
  border: none; 
}
  
`;
const SubTitle = styled.h3`
@media (max-width:767px){
  margin-left: 20px;
  font-family: Rubik;
  font-size: 20px;
  font-weight: 600;
}
  
`;
const DivContainerTitle = styled.div`
  @media (max-width:767px){
    height: 170px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  }
  
`;
const Title = styled.h2`
@media (max-width:767px){
  margin-top: 40px;
  font-size: 34px;
  margin-bottom: 20px;
  line-height: 30px;
  margin-left: 10px;
}
  
`;

const DivAbout = styled.div`
@media (max-width:767px){
  display: flex;
  text-align: center;
  justify-content: center;
  margin-right: 10px;
}
  
`;
const ParagraphSup = styled.p`
@media (max-width:767px){
  font-weight: 10px;
}

`;

const DivInfo = styled.div`
  @media (max-width:767px){
    margin-top: 50px;
  display: flex;
  flex-direction: row;
  }
  
`;

const HrInfo = styled.hr`
@media (max-width:767px){
  width: 39px;
  margin-left: 6px;
  background-image: linear-gradient(to bottom, #e2e70f, #ff06b9);
  height: 150px;
  border: none;
}
  
`;

const ParagraphInf = styled.p`
@media (max-width:767px){
  margin-left: 20px;
  margin-right: 20px;
}
  
  


`;

const Body = () => {
  return (
    <DivBody>
      <DivImag>
        <DivImgSuperior>
          <ImgSuperior1 src={fotoSuperior1} />
          <ImgSuperior2 src={fotoSuperior2} />
        </DivImgSuperior>
        <DivImgInferior>
          <ImgInferior src={fotoinferior} />
        </DivImgInferior>
      </DivImag>

      <DivContainerInfo>
        <DivContainerSubTitle>
          <SubTitleLine />
          <SubTitle> About Phlox Group</SubTitle>
        </DivContainerSubTitle>

        <DivContainerTitle>
          <Title>We Are The Leader In Construction</Title>
        </DivContainerTitle>

        <DivAbout>
          <ParagraphSup>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
          </ParagraphSup>
        </DivAbout>

        <DivInfo>
          <HrInfo />
          <ParagraphInf>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis
          </ParagraphInf>
        </DivInfo>
      </DivContainerInfo>
    </DivBody>
  );
};

export default Body;
