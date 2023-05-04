import { helvetica } from "@/pages/_app";
import {
  GenericMainTitle,
  GenericSubtitle,
  Title,
} from "@/styles/sharedstyles";
import styled from "styled-components";
import Image from "next/image";
import Icosahedron from "../../assets/images/Icosahedron.png";
import styles from "../../styles/images.module.css";

export default function WelcomeBanner() {
  return (
    <BannerWrapper>
      <InnerContainer>
        <Title>WELCOME TO CRONOS</Title>
        <MainTitle className={helvetica.className}>
          The Internet of Blockchains.
        </MainTitle>
        <Subtitle>
          Cronos is an ever expanding ecosystem of connected apps and services,
          built for a decentralized future.
        </Subtitle>
      </InnerContainer>
      <Image
        className={styles.icosahedron}
        src={Icosahedron}
        alt="Icosahedron"
        width={336}
        height={336}
      />
      <Image
        className={styles.bigicosahedron}
        src={Icosahedron}
        alt="Icosahedron"
        width={622}
        height={622}
        priority
      />
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  min-height: 808px;
  width: 100%;
  margin-top: 173px;
  padding-top: 31px;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 614px) {
    margin-top: 90px;
    min-height: 450px;
    padding-top: 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

const MainTitle = styled(GenericMainTitle)`
  font-size: 153px;
  line-height: 181px;
  text-align: center;
  margin-top: 45px;

  @media (max-width: 1280px) {
    font-size: 90px;
    line-height: 100px;
  }

  @media (max-width: 614px) {
    font-size: 50px;
    line-height: 70px;
    margin-top: 30px;
  }
`;

const Subtitle = styled(GenericSubtitle)`
  width: 80%;
  margin: 17px 39px;
  padding: 0 300px;

  @media (max-width: 1366px) {
    margin: 0;
    padding: 0 10px;
  }

  @media (max-width: 614px) {
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    padding: 0 10px;
  }
`;
