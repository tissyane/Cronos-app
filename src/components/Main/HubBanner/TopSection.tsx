import {
  GenericMainTitle,
  GenericSubtitle,
  Title,
} from "@/styles/sharedstyles";
import styled from "styled-components";
import Image from "next/image";
import styles from "../../../styles/images.module.css";
import Thorus from "../../../assets/images/Thorus.png";
import { helvetica } from "@/pages/_app";

export default function Top() {
  return (
    <TopWrapper>
      <Image
        className={styles.thorus}
        src={Thorus}
        alt="Thorus"
        width={840}
        height={840}
      />
      <TextContainer>
        <Title>ENTER THE CRONOS HUB</Title>
        <MainTitle className={helvetica.className}>
          The Heart of the Interchain.
        </MainTitle>
        <Subtitle>
          Serving as the economic center of Cronos, the Cronos Hub is a
          blockchain that provides vital services to the Interchain
        </Subtitle>
      </TextContainer>
    </TopWrapper>
  );
}

const TopWrapper = styled.div`
  width: 840px;
  margin: 0px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 614px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const MainTitle = styled(GenericMainTitle)`
  margin-top: 46px;
  text-align: center;
  font-size: 90px;
  line-height: 107px;

  @media (max-width: 614px) {
    font-size: 50px;
    line-height: 50px;
    text-align: center;
  }
`;

const Subtitle = styled(GenericSubtitle)`
  width: 707px;
  line-height: 43px;
  margin: 45px 0;
  padding: 0;

  @media (max-width: 614px) {
    width: 100%;
    font-size: 20px;
    line-height: 30px;
  }
`;
