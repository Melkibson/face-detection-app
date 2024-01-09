import styled from "styled-components"
import logo from "./logo.png";
const LogoImage = styled.img`
 width: 100%;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: purple;
  margin: 1em;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
`;
export default function Logo() {
  return (
      <LogoContainer>
        <LogoImage src={logo} alt="logo"/>
      </LogoContainer>
  );
}
