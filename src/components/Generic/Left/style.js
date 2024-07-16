import { Flex } from "antd";
import styled from "styled-components";
import backgroundImage from "../../../assets/images/bg-of-image.png";

const getSize = ({ type }) => {
  switch (type) {
    case "small":
      return {
        lineHeight: "25px",
        margin: "0 0 5px 0",
      };

    case "medium":
      return {
        lineHeight: "30px",
        margin: "0 0 10px 0",
      };

    case "large":
      return {
        lineHeight: "40px",
        margin: "0 0 26px 0",
      };

    default:
      return {
        background: "var(--light)",
      };
  }
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 120px 0;
  height: max-content;
  background: var(--bgCard);
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  
  @media (max-width: 1160px) {
    width: 98%;
  
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 45px;
  @media (max-width: 1160px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    justify-content: space-between;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  align-items: flex-start;
  width: 200px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  gap: 20px;
  width: 497px;
  margin: 20px 0 0 0;
  @media (max-width: 1160px) {
    grid-template-columns: 150px 150px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 150px 150px 150px;
    width: 100%;
  }
`;

export const GenericTitle = styled.div`
  max-width: 900px;
  font-size: 64px;
  line-height: 64px;
  font-weight: 800;
  margin-bottom: 44px;
  color: var(--primary);
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 30%;
  }
`;

export const GenericText = styled.p`
  font-size: 24px;
  font-weight: 500;
  ${getSize}
  width: ${({ w }) => (w ? w : "100%")};
  color: var(--dark);
  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 30px;
    width: 500px;
  }
`;

export const SubCardSection = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SubCardTitle = styled.h4`
  font-size: 32px;
  line-height: 40px;
  font-weight: 800;
  margin: 26px 0 20px 0;
  color: var(--secondary);
`;

export const SubCardWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 100px 100px 100px 100px;
  gap: 15px;
  @media (max-width: 1160px) {
    width: 80%;
    justify-content: flex-start;
    grid-template-columns: 100px 100px 100px 100px;
    gap: 10px;
  }
  @media (max-width: 900px) {
    width: 500px;
    grid-template-columns: 100px 100px 100px 100px;
  }
`;

export const RightImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 43%;

  @media (max-width: 1160px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 500px;
    height: 472px;
  }
  @media (max-width: 800px) {
    width: 400px;
    height: 470px;
  }
`;

export const BackgroundCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 563px;
  border-radius: 10px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(${backgroundImage});
  @media (max-width: 1160px) {
    width: 100%;
    height: 560px;
  }
  @media (max-width: 900px) {
    width: 500px;
    height: 470px;
  }
  @media (max-width: 800px) {
    width: 400px;
    height: 470px;
  }
`;

export const RightImage = styled.img`
  width: 89%;
  @media (max-width: 1160px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 500px;
    height: 470px;
  }
  @media (max-width: 800px) {
    width: 400px;
    height: 470px;
  }

`;
