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
  border-radius: 0.25rem;
  transition: all;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <Logo />
      <Span>Sign Out</Span>
    </Nav>
  );
}