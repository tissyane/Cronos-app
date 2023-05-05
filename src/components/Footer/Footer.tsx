import { footer_data } from "@/assets/data/footer";
import FooterColumn from "./Columns";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterColumn data={footer_data.learn} />
      <FooterColumn data={footer_data.build} />
      <FooterColumn data={footer_data.explore} />
      <FooterColumn data={footer_data.participate} />
      <FooterColumn data={footer_data.resources} />
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 141px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 614px) {
    margin-top: 50px;
    justify-content: center;
    gap: 80px;
  }
`;
