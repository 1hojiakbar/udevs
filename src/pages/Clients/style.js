import styled from "styled-components";

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

export const SliderContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const Logo = styled.img`
  width: 190px;
  height: 130px;
  margin: 0 20px;
  transition: all linear 150ms;
  &:hover {
    transform: scale(1.11);
  }
`;
