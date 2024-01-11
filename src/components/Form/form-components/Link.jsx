import styled from 'styled-components'

const StyledLink = styled.p`
  font-size: 1.1rem;
  text-decoration: none;
  opacity: 1;
  transition: all 0.15s ease-in-out;
  color: #fff;
  display: block;
  cursor: pointer;
  &:hover {
    color: #a463f2;
  }
`;
export default function Link({onRouteChange, label}) {
  return (
    <StyledLink onClick={onRouteChange}>{label}</StyledLink>
      
  )
}
