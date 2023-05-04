import styled from "styled-components";
import Image from "next/image";
import styles from "../../styles/images.module.css";
import Helix from "../../assets/images/Helix.png";
import {
  GenericMainTitle,
  GenericSubtitle,
  Title,
} from "@/styles/sharedstyles";
import { helvetica } from "@/pages/_app";

export default function ServicesBanner() {
  return (
    <BannerWrapper>
      <TextContent>
        <LeftContainer>
          <Title>COMMUNITY-OWNED AND OPERATED</Title>
          <MainTitle className={helvetica.className}>
            Enter a Universe of Connected Services.
          </MainTitle>
          <Subtitle>
            Cronos apps and services connect using IBC, the Inter-Blockchain
            Communication protocol. This innovation enables you to freely
            exchange assets and data across sovereign.{" "}
          </Subtitle>
        </LeftContainer>
        <RightContainer>
          <div>
            <Number className={helvetica.className}>265+</Number>
            <Description>Apps & services</Description>
          </div>
          <div>
            <Number className={helvetica.className}>$63B+</Number>
            <Description>Digital assets </Description>
          </div>
        </RightContainer>
      </TextContent>

      <Image
        className={styles.helix}
        src={Helix}
        alt="Helix"
        width={618}
        height={618}
      />
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  position: relative;
  min-height: 800px;
  margin: 186px 193px 0 0;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 1700px) {
    margin: 90px 0px 0 0;
  }

  @media (max-width: 614px) {
    margin: 20px;
    min-height: 1100px;
  }
`;

const TextContent = styled.div`
  display: flex;

  @media (max-width: 614px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  width: 45%;
  min-height: 622px;
  margin-left: 198px;
  position: absolute;
  z-index: 1;

  @media (max-width: 1700px) {
    margin-left: 80px;
  }

  @media (max-width: 614px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
    margin-left: 40px;
  }
`;

const MainTitle = styled(GenericMainTitle)`
  text-align: left;
  font-size: 90px;
  line-height: 107px;
  margin-top: 60px;

  @media (max-width: 1700px) {
    font-size: 70px;
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

  @media (max-width: 1500px) {
    font-size: 33px;
    line-height: 30px;
  }

  @media (max-width: 614px) {
    margin-top: 20px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
`;

const RightContainer = styled.div`
  width: 376px;
  height: 486px;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: end;

  div {
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: end;

    @media (max-width: 614px) {
      margin-top: 0px;
      text-align: center;
    }
  }

  @media (max-width: 614px) {
    top: 500px;
  }
`;

const Number = styled(MainTitle)`
  font-size: 117px;
  line-height: 139px;
  margin-bottom: -10px;

  @media (max-width: 614px) {
    font-size: 100px;
    line-height: 110px;
  }
`;

const Description = styled.h5`
  font-weight: 400;
  font-size: 30px;
  line-height: 39px;
  text-align: center;
  letter-spacing: 0.01em;
`;
