import { Flex, Space } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
  min-height: max-content;
  margin-bottom: 110px;
  background: var(--light);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 72px;
  @media (max-width: 1160px) {
    width: 96%;
    margin-top: 45px;
    /* border: 1px solid red; */
  }
`;

export const LogoImage = styled.img`
  width: 237px;
  height: 79px;
  margin-bottom: 14px;
  @media (max-width: 1160px) {
    width: 200px;
    height: 79px;
    margin: 0;
    /* border: 1px solid red; */
  }
`;

export const LeftContent = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 20px;
  margin-top: 110px;
  @media (max-width: 1160px) {
    margin-top: 20px;
  }
  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

export const RightContent = styled(Space)``;

export const HomeTitle = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 24px;
  color: var(--secondary);
  margin-bottom: 20px;
  @media (max-width: 1160px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 0;
  }
`;

export const SubTitle = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 44px;
  color: var(--primary);
  margin-bottom: 20px;
  @media (max-width: 1160px) {
    font-size: 32px;
    line-height: 30px;
  }
`;

export const LeftImage = styled.img`
  width: 547px;
  height: 414px;
  @media (max-width: 1160px) {
    width: 450px;
    height: 400px;
    /* border: 1px solid red; */
  }
`;
