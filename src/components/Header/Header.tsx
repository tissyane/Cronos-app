import styled from "styled-components";
import NavBarRight from "./NavBarRight";

export default function Header() {
  return (
    <Wrapper>
      <Logo>CRONOS</Logo>
      <NavBarRight />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 34px;
  margin: 95px auto 0;
  padding: 0 75px;
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
