import styled from "styled-components";
import GlobaStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 2rem;
`;

const App = () => {
  return (
    <>
      <GlobaStyles />
      <StyledApp>
        <Heading type="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check In and Out</Heading>
        <Button onClick={() => alert("test")}>Check in</Button>
        <Button onClick={() => alert("test")}>Check out</Button>
        <Input type="number" placeholder="Number of guests" />
        <Heading as="h3">Form</Heading>
      </StyledApp>
    </>
  );
};

export default App;
