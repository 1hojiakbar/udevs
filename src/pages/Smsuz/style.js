import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  gap: 10px;
`;

export const LeftBrandLogo = styled.img`
  margin-top: -160px;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  min-width: 120px;
  border-radius: 100px;
  padding: 5px 20px;
  column-gap: 8px;
  background-color: rgba(68, 115, 229, 0.2);
  opacity: rgba(255, 60, 0, 0.5686274509803921);
  margin: 20px 0 40px 0;
`;

Message.Icon = styled.img`
  width: 25px;
  height: 25px;
`;
Message.Title = styled.strong`
  color: #4473e5;
  font-weight: 600;
`;

export const LeftBox = styled.div`
  width: 50%;
`;

export const RightBox = styled.div`
  width: 50%;
`;

export const RightBoxText = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  margin: 20px 0;
`;

export const RightBoxCenterText = styled.div`
  font-size: 20px;
  line-height: 40px;
  font-weight: 600;
  margin: 10px 0;
  color: var(--secondary);
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  gap: 20px;
`;
