import styled from "styled-components";
const { Text } = Typography;
import { Space, Flex, Typography } from "antd";
import backgroundImage from "../../../assets/images/bg-of-image.png";

const getBgImage = ({ bool }) => {
  if (bool === "true") {
    return {
      backgroun: `url(${backgroundImage})`,
    };
  } else {
    return {
      backgroun: "transparent",
    };
  }
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 100px 0;
  justify-content: center;
  background: var(--bgCard);
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`;

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 45px;
  border: 2px solid teal;
`;

export const LeftImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 43%;
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
  ${getBgImage}
`;

export const LeftImage = styled.img`
  width: 89%;
`;

export const RightContent = styled.div`
  width: 47%;
`;
