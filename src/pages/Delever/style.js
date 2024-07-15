import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* padding: 120px 0; */
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
  max-width: 60px;
  border-radius: 100px;
  padding: 4px 16px;
  column-gap: 8px;
  background: rgba(255, 87, 34, 0.2);
  opacity: rgba(255, 60, 0, 0.5686274509803921);
  margin: 20px 0 40px 0;
`;

Message.Icon = styled.img``;
Message.Title = styled.strong`
  color: rgba(255, 60, 0, 0.5686274509803921);
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
  color: var(--secondary);
`;
