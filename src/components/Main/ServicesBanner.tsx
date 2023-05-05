import styled from "styled-components";
import Image from "next/image";
import styles from "../../styles/images.module.css";
import Helix from "../../assets/images/Helix.png";
import { helvetica } from "@/pages/_app";
import LeftSide from "./Services_LeftSide";
import { GenericMainTitle } from "@/styles/sharedstyles";

export default function ServicesBanner() {
  return (
    <BannerWrapper>
      <LeftSide />
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
  min-height: 1050px;
  margin: 186px 193px 0 0;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 1399px) and (min-width: 614px) {
    min-height: 1400px;
    margin: 90px 20px 0 0;
  }

  @media (max-width: 614px) {
    margin: 20px;
  }
`;

const RightContainer = styled.div`
  width: 376px;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 614px) {
    position: inherit;
    margin-top: 650px;
  }

  div {
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: end;

    @media (max-width: 614px) {
      margin-top: 40px;
      text-align: center;
    }
  }
`;

const Number = styled(GenericMainTitle)`
  font-size: 117px;
  line-height: 139px;
  margin-bottom: -10px;

  @media (max-width: 1399px) and (min-width: 614px) {
    font-size: 100px;
    line-height: 110px;
  }

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
