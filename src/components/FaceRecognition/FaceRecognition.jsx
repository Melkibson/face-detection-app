import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const Image = styled.img`
  position: relative;
  max-width: 600px;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const BoundingBox = styled.div`
    position: absolute;
    box-shadow: 0 0 0 3px #149df2 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
`

export default function FaceRecognition({imageUrl, alt, box}) {
  return (
    <Container>
      <ImageContainer>
        <Image id="inputImage" src={imageUrl} alt={alt} />
        <BoundingBox style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></BoundingBox>
      </ImageContainer>
    </Container>
  );
}
