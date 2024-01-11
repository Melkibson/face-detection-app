import styled from "styled-components";

const StyledLegend = styled.legend`
  font-size: 2.5rem;
  font-weight: 600;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Legend({label}) {
  return (
    <StyledLegend>
      {label}
    </StyledLegend>
  )
}
