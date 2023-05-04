import styled from "styled-components";
import NavBarRight from "./NavBarRight";
import { HiMenu } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";
import styles from "../../styles/images.module.css";

export default function Header() {
  return (
    <Wrapper>
      <Logo>CRONOS</Logo>
      <NavBarRight />
      <Button>
        <h4>Get CRONOS</h4>
        <SlArrowRight color="white" fontSize="18px" />
      </Button>
      <HiMenu className={styles.hidden} color="white" fontSize="25px" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 34px;
  padding: 0 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h4`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 26.1538px;
  font-weight: 500;
  line-height: 34px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h4 {
    font-size: 26.1538px;
    font-weight: 500;
    line-height: 34px;
  }
`;
