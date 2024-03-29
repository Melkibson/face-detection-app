import styled from "styled-components"
import Logo from "../Logo/Logo"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;
`;
const Span = styled.span`
  font-size: 1.25rem;
  height: auto;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5em 1em;
  margin: 1em;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function Navigation({onRouteChange, isSignedIn}) {
  return (
    <Nav>
      <Logo />
      {
      isSignedIn ? 
      <Span onClick={onRouteChange}>Sign Out</Span>
      : ''
        }
    </Nav>
  );
}