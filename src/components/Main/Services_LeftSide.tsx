import {
  Button,
  GenericMainTitle,
  GenericSubtitle,
  Title,
} from "@/styles/sharedstyles";
import { helvetica } from "@/pages/_app";
import { SlArrowRight } from "react-icons/sl";
import styled from "styled-components";

export default function LeftSide() {
  return (
    <LeftContainer>
      <Title>COMMUNITY-OWNED AND OPERATED</Title>
      <MainTitle className={helvetica.className}>
        Enter a Universe of Connected Services.
      </MainTitle>
      <Subtitle>
        Cronos apps and services connect using IBC, the Inter-Blockchain
        Communication protocol. This innovation enables you to freely exchange
        assets and data across sovereign.
      </Subtitle>
      <Bottom>
        <Button>Learn</Button>
        <div>
          <h3>Explore Tokens</h3>
          <SlArrowRight color="white" fontSize="18px" />
        </div>
      </Bottom>
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  width: 45%;
  min-height: 622px;
  margin-left: 198px;
  position: absolute;
  z-index: 1;

  @media (max-width: 1399px) and (min-width: 614px) {
    margin-left: 80px;
  }

  @media (max-width: 614px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
    margin-left: 40px;
  }
`;

const MainTitle = styled(GenericMainTitle)`
  text-align: left;
  font-size: 90px;
  line-height: 107px;
  margin-top: 60px;

  @media (max-width: 1399px) and (min-width: 614px) {
    font-size: 60px;
    line-height: 80px;
  }

  @media (max-width: 614px) {
    font-size: 50px;
    line-height: 50px;
    text-align: center;
  }
`;

const Subtitle = styled(GenericSubtitle)`
  text-align: left;

  @media (max-width: 1399px) and (min-width: 614px) {
    line-height: 38px;
  }

  @media (max-width: 614px) {
    margin-top: 20px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
`;

const Bottom = styled.div`
  display: flex;
  margin-top: 59px;

  div {
    display: flex;
    align-items: center;
    margin-left: 68px;
    gap: 11px;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;

    @media (max-width: 1399px) and (min-width: 614px) {
      margin-left: 40px;
      justify-content: center;
      padding-right: 60px;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
    }

    @media (max-width: 614px) {
      font-size: 15px;
      line-height: 15px;
      margin-left: 40px;
    }
  }
`;
