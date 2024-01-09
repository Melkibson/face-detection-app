import React from 'react'
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  padding: 1.25rem;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  border-radius: 0.5rem;
  background: #c9d4f5c4;
`;
export default function ImageLinkForm({onInputChange, onBtnSubmit}) {
  return (
    <Container>
        <Paragraph>
        This Magic Brain will detect faces in your pictures. Give it a try!
        </Paragraph>
        <InputContainer>
            <Input onChange={onInputChange} type="text" />
            <Button label="Detect" onClick={onBtnSubmit}/>
        </InputContainer>
    </Container>
  );
}
