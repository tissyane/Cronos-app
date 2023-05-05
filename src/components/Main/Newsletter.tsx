import { Description, LowerTitle } from "@/styles/sharedstyles";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "../../styles/images.module.css";

export default function Newsletter() {
  return (
    <>
      <Container>
        <Left>
          <LowerTitle>Receive transmissions</LowerTitle>
          <div>
            <Description>
              Unsubscribe at any time. Privacy policy{" "}
              <FiArrowUpRight
                className={styles.arrow}
                color="white"
                fontSize="25px"
              />
            </Description>
          </div>
        </Left>
        <InputForm placeholder="Your email"></InputForm>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 380px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1399px) and (min-width: 614px) {
    margin-left: 80px;
  }

  @media (max-width: 614px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Left = styled.div`
  div {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 614px) {
    width: 70%;
  }
`;

const InputForm = styled.input`
  width: 480px;
  height: 91.79px;
  border: none;
  padding: 28px 184px 28px 32px;
  gap: 236px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-size: 27px;

  &::placeholder {
    font-size: 27px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.21);

    @media (max-width: 614px) {
      font-size: 18px;
    }
  }

  @media (max-width: 614px) {
    width: 80%;
    height: 50px;
    padding: 10px;
    font-size: 18px;
  }
`;
