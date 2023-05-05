import { FooterItem, FooterColumnTitle } from "@/styles/sharedstyles";
import styled from "styled-components";

interface FooterProps {
  data: {
    column: string;
    items: { title: string }[];
  };
}

export default function FooterColumn({ data }: FooterProps) {
  const { column, items } = data;

  return (
    <ColumnWrapper>
      <FooterColumnTitle>{column}</FooterColumnTitle>
      {items.map(({ title }) => (
        <FooterItem>{title}</FooterItem>
      ))}
    </ColumnWrapper>
  );
}

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 614px) {
    gap: 0px;
  }
`;
