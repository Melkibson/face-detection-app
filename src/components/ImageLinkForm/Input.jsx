import styled from "styled-components"

const DetectInput = styled.input`
  font-size: 1.25rem;
  padding: 0.5rem;
  width: 70%;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
`;
const Label = styled.label`

`
export default function Input({onChange, type, placeholder, name, label}) {
  return (
    <>
      <Label for={name}>{label}</Label>
      <DetectInput onChange={onChange} name={name} type={type} placeholder={placeholder} />
    </>
  );
}
