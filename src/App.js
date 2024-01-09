import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.main`
  height: 100%;
  width: 100%;
  
`;
function App() {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  }
  const onBtnSubmit = () => {
    console.log("click");
  }

  return (
    <Main className="App">
      <ParticlesBg color="#1904E5" type="circle" bg={true} />
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
      {/*
      
      <FaceRecognition/>*/}
    </Main>
  );
}

export default App;
