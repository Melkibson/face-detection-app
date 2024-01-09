import styled from "styled-components"

const DetectButton = styled.button`
  width: 30%;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: #a463f2;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  color: white;
  font-family: "Coolvetica", sans-serif;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;
export default function Button({label , onClick}) {
  return (
    <DetectButton onClick={onClick}>
      {label}
    </DetectButton>
  )
}
