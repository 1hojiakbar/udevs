import { Flex, Space } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  margin-bottom: 110px;
  background: var(--light);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 72px;
`;

export const LogoImage = styled.img`
  width: 267px;
  height: 89px;
  margin-bottom: 24px;
`;

export const LeftContent = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 20px;
`;

export const RightContent = styled(Space)``;

export const HomeTitle = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 54px;
  color: var(--secondary);
  margin-bottom: 20px;
`;

export const SubTitle = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 54px;
  color: var(--primary);
  margin-bottom: 20px;
`;

export const LeftImage = styled.img`
  width: 547px;
  height: 414px;
`;
