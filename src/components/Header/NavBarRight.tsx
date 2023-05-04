import styled from "styled-components";

export default function NavBarRight() {
  return (
    <Menu>
      <p>Learn</p>
      <p>Build</p>
      <p>Explore</p>
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  gap: 82px;
  margin-left: 75px;

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }
`;
