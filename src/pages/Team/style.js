import { Image } from "antd";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const showPlus = keyframes`
from{
content: "";
}

to{
  content: "+";
}

`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  background: var(--bgCard);
`;

export const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  justify-content: space-between;
  width: 90%;
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const RightImage = styled(Image)``;

export const CountStyle = styled(motion.h1)`
  font-size: 120px;
  font-weight: 800;
  line-height: 100px;
  color: var(--primary);
  font-family: var(--mulish);
  transition: all 200ms;
  &::after {
    content: "+";
    font-size: 120px;
    font-family: var(--mulish);
    transition: all 200ms;
    animation: ${showPlus} linear 6s;
  }
`;

export const TeamText = styled.div`
  width: 450px;
  font-size: 20px;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 26px;
  color: var(--secondary);
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const CountTitle = styled.h5`
  font-size: 40px;
  line-height: 72px;
  font-weight: 800;
  color: var(--secondary);
  @media (max-width: 900px) {
    font-size: 24px;
  }
`;
