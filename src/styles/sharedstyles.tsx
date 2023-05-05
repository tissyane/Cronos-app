import styled from "styled-components";

const Title = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
`;

const GenericMainTitle = styled.h3`
  letter-spacing: -0.02em;
  background: linear-gradient(
    94.78deg,
    #ffffff 1.7%,
    rgba(255, 255, 255, 0.44) 100.26%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const GenericSubtitle = styled.h5`
  font-weight: 400;
  font-size: 33px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.white};
`;

const Button = styled.button`
  padding: 30px 114px;
  gap: 10px;
  width: 281px;
  height: 86px;
  background: linear-gradient(
    95.46deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.51) 101.07%
  );

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #06070a;
  }

  @media (max-width: 614px) {
    width: 150px;
    height: 56px;
    padding: 0;
  }
`;

const LowerTitle = styled.h4`
  font-weight: 700;
  font-size: 50px;
  line-height: 65px;
  letter-spacing: 0.01em;

  @media (max-width: 614px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

const Description = styled.p`
  font-size: 27px;
  line-height: 35px;
  letter-spacing: 0.01em;

  @media (max-width: 614px) {
    font-size: 20px;
    line-height: 35px;
    margin-top: 20px;
  }
`;

const FooterColumnTitle = styled.h5`
  font-weight: 500;
  font-size: 35px;
  line-height: 46px;
  letter-spacing: 0.01em;

  @media (max-width: 614px) {
    font-size: 20px;
    line-height: 46px;
  }
`;

const FooterItem = styled.p`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.45);

  @media (max-width: 614px) {
    font-size: 15px;
    line-height: 46px;
  }
`;

export {
  Title,
  GenericMainTitle,
  GenericSubtitle,
  Button,
  LowerTitle,
  Description,
  FooterColumnTitle,
  FooterItem,
};
