import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import styled from "styled-components";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/Form/SignIn";
import Register from "./components/Form/Register";

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
`;

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });

    console.log(user);
  };

  const PAT = "7f8e2cc51dd947f695c5b7c9fe72e725";
  const USER_ID = "yamna";
  const APP_ID = "face-recognition";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = input;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);
    const image = document.querySelector("#inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  const displayFaceBox = (box) => {
    console.log(box);
    setBox(box);
  };
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onBtnSubmit = () => {
    setImageUrl(input);
    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          fetch("http://localhost:3001/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              setUser({ ...user, entries: count });
            })
            .catch(console.log);
        }
        displayFaceBox(calculateFaceLocation(result));
      })
      .catch((error) => console.log("error", error));
  };

  const onRouteChange = (route) => {
    if (route === "signin") {
      setIsSignedIn(false);
    } else if (route === "home") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <Main className="App">
      <Navigation
        isSignedIn={isSignedIn}
        onRouteChange={() => onRouteChange("signin")}
      />
      {route === "home" ? (
        <>
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onBtnSubmit={onBtnSubmit}
          />
          <FaceRecognition imageUrl={imageUrl} alt="" box={box} />
        </>
      ) : route === "signin" ? (
        <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </Main>
  );
}

export default App;
