import styled from "styled-components"

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  appearance: none;
  background: transparent;
  width: 100%;
  border: none;
  background: #fff;
  transition: all 0.25s ease-in-out;
  border-radius: 0.25rem;
  &:hover {
    background: #a463f2;
    &::placeholder, &:focus {
      color: #fff;
    }
  }
`;

const Label = styled.label`
  display: block;
  line-height: 1.5;
`;  

export default function Input({type, name, placeholder, onChange, label}) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  );
}
