import styled from "styled-components";
import { SlArrowRight } from "react-icons/sl";

export default function NavBarRight() {
  return (
    <NavBarContainer>
      <Menu>
        <p>Learn</p>
        <p>Build</p>
        <p>Explore</p>
      </Menu>
      <Button>
        <h4>Get CRONOS</h4>
        <SlArrowRight color="white" fontSize="18px" />
      </Button>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.nav`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  gap: 82px;

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 350px;

  h4 {
    font-size: 26.1538px;
    font-weight: 500;
    line-height: 34px;
  }
`;
