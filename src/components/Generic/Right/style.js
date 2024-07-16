import styled from "styled-components";
import backgroundImage from "../../../assets/images/bg-of-image.png";

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
    gap: 10px;
    justify-content: flex-start;
  }
`;

export const LeftImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43%;
  object-fit: cover;
  @media (max-width: 1160px) {
    display: flex;
    justify-content: flex-end;
    width: 450px;
  }
  @media (max-width: 900px) {
    width: 500px;
    height: 296px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 20px;
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
    height: 500px;
  }
  @media (max-width: 900px) {
    width: 500px;
    height: 296px;
    border-radius: 20px;
  }
`;

export const LeftImage = styled.img`
  width: 89%;
  @media (max-width: 1160px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 500px;
    height: 296px;
    border-radius: 20px;
  }
`;

export const RightContent = styled.div`
  width: 47%;
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
