import styled from "styled-components";
import HeaderMeny from "./headerMeny";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-gray-300);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);

  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: flex-end;
`;

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMeny />
    </StyledHeader>
  );
}
