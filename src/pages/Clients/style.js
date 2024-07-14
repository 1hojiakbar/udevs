import styled, { keyframes } from "styled-components";
import { clientsTopData, clientsBottomData } from "../../utils/clients";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 120px 0;
`;

export const TitleWrapper = styled.div`
  width: 90%;
`;

export const scrollRightAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * ${
      (clientsTopData.length + clientsBottomData.length) / 6
    }));
  }
`;

export const scrollLeftAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(250px * ${
      (clientsTopData.length + clientsBottomData.length) / 6
    }));
  }
`;

export const SliderContainer = styled.div`
  background: white;
  height: 150px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const SlideTop = styled.div`
  display: flex;
  width: calc(250px * ${clientsTopData.length + clientsBottomData.length});
  animation: ${scrollRightAnimation} 10s linear infinite;
`;

export const SlideBottom = styled.div`
  display: flex;
  width: calc(250px * ${clientsTopData.length + clientsBottomData.length});
  animation: ${scrollLeftAnimation} 10s linear infinite;
`;

export const SlideContainer = styled.div`
  height: 150px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  &:hover {
    transform: scale(1.12);
  }
`;

export const Logo = styled.img`
  max-width: 80%;
  max-height: 80%;
`;
