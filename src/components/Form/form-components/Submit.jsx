import styled from "styled-components";

const SubmitInput = styled.input`
  font-family: "Coolvetica", sans-serif;
  color: #fff;
  font-size: 1.25rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #a463f2;
  appearance: none;
  border: solid 1px #a463f2;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  border-radius: 0.25rem;
  cursor: pointer;
  &:focus,
  &:hover {
    transform: scale(1.05);
  }
`;
export default function Submit({value, onClick}) {
  return (
    <SubmitInput onClick={onClick} type="submit" value={value}/>
  )
}
