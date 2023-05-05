import Image from "next/image";
import { hub_data } from "@/assets/data/hub";
import styled from "styled-components";
import { LowerTitle } from "@/styles/sharedstyles";
import { Description } from "@/styles/sharedstyles";
import { Button } from "@/styles/sharedstyles";
import { SlArrowRight } from "react-icons/sl";

export default function Bottom() {
  return (
    <>
      <Container>
        {hub_data.map((item) => (
          <div key={item.title}>
            <Image
              src={item.path}
              alt={`${item.title}`}
              height={242}
              width={242}
            />
            <LowerTitle>{item.title}</LowerTitle>
            <Description>{item.description}</Description>
          </div>
        ))}

        <ButtonHub>
          <p>Cosmos Hub</p>
          <SlArrowRight fontSize="18px" />
        </ButtonHub>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 500px 500px;
  grid-gap: 90px;
  justify-content: center;

  @media (max-width: 614px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const ButtonHub = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 141px;
  padding: 0;

  @media (max-width: 614px) {
    p {
      font-size: 16px;
    }
  }
`;
