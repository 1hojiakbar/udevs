import styled from "styled-components";
const { Text } = Typography;
import { Space, Flex, Typography } from "antd";
import backgroundImage from "../../../assets/images/bg-of-image.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 120px 0;
  height: max-content;
`;

export const ContentWrapper = styled(Space)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const RightImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 100px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  gap: 15px;
  margin: 40px 0;
`;

export const GenericTitle = styled.div`
  max-width: 900px;
  font-size: 64px;
  line-height: 64px;
  font-weight: 800;
  margin-bottom: 44px;
  color: var(--primary);
`;

export const GenericText = styled(Text)`
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 26px;
  width: 420px;
  color: var(--dark);
`;

export const SubCardSection = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SubCardWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const BackgroundCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 500px;
  height: 563px;
  border-radius: 10px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(${backgroundImage});
`;

export const RightImage = styled.img``;

export const SubCardTitle = styled.h4`
  font-size: 32px;
  line-height: 40px;
  font-weight: 800;
  margin-bottom: 22px;
  color: var(--secondary);
`;
