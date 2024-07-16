import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 495px;
  padding: 80px 0;
  background: var(--bgCard);
`;

export const FooterLogo = styled.img`
  width: 130px;
  margin: 0 auto;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 44px 0 32px 0;
  border: 1px solid red;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const FooterLinksItemTitle = styled.div`
  color: #313233;
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 22px;
`;

export const FooterDivider = styled.div`
  width: 91%;
  border: 1px solid var(--selectedCardBg);
`;

export const FooterPageLink = styled(Link)`
  color: #1b5bf7;
  padding: 4px 0;
  cursor: pointer;
  &:hover {
    text-decoration: 1px underline #1b5bf7;
  }
`;

export const FooterBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 25px 0;
`;

export const BottomContentWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #1b5bf7;
  gap: ${({ gap }) => (gap ? gap : "3px")};
  font-size: 14px;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 45%;
  padding: 10px 10px;
  cursor: pointer;
  background: #dde7ff;
`;
export const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  & path {
    fill: #1b5bf7;
  }
`;
