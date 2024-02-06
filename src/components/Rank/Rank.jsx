import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: #fff;
    font-size: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const UserHeading = styled.div`
  color: #fff;
  font-size: 1.5rem;
`;

const UserRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3rem;
`;

export default function Rank({ name, entries}) {
  return (
    <Container>
      <UserHeading>{`${name} your current rank is ...`} </UserHeading>
      <UserRank>#{entries}</UserRank>  
    </Container>
  )
}
