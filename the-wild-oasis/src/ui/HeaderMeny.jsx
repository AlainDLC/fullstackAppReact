import LogOut from "../features/authentication/LogOut";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DarkModeToogle from "./DarkModeToogle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export default function HeaderMeny() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon>
          <HiOutlineUser onClick={() => navigate("/account")} />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToogle />
      </li>
      <li>
        <LogOut />
      </li>
    </StyledHeaderMenu>
  );
}
