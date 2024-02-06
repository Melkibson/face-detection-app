import { useState } from "react";
import { Form } from "./form-components/Form";
import { FieldSet } from "./form-components/FieldSet";
import Legend from "./form-components/Legend";
import Input from "./form-components/Input";
import Submit from "./form-components/Submit";
import Link from "./form-components/Link";
import { LinkContainer } from "./form-components/LinkContainer";
import { loadUser } from "../../App";

export default function Register({onRouteChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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
   };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 const handleSubmit = (e) => {
    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          loadUser(user);
          onRouteChange("home");
        }
      }); 
    }

  return (
    <Form>
      <FieldSet>
        <Legend label="Register" />
        <Input 
          onChange={handleNameChange}
          type="text" 
          name="name" 
          placeholder="Name" 
          label="Name" />
        <Input 
          onChange={handleEmailChange}
          type="email" 
          name="email" 
          placeholder="Email" 
          label="Email" />
        <Input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
        />
      </FieldSet>
      <div>
        <Submit
          onClick={handleSubmit}
          label="Register"
          value="Register"
        />
      </div>
      <LinkContainer>
        <Link
          onRouteChange={() => onRouteChange("signin")}
          label="Already have an account ? Sign up"
        />
      </LinkContainer>
    </Form>
  );
}
