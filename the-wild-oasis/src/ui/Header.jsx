import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-gray-300);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);
`;

export default function Header() {
  return <StyledHeader></StyledHeader>;
}
