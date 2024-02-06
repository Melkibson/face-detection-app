import { useState } from "react";
import { Form } from "./form-components/Form";
import { FieldSet } from "./form-components/FieldSet";
import Legend from "./form-components/Legend";
import Input from "./form-components/Input";
import Submit from "./form-components/Submit";
import Link from "./form-components/Link";
import { LinkContainer } from "./form-components/LinkContainer";
import { loadUser } from "../../App";

export default function SignIn({ loadUser, onRouteChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleEmailChange = (e) => {
     setEmail(e.target.value);
   };
   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };

   const handleSubmit = (e) => {
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            loadUser(user);
            onRouteChange("home");
          }
        })
    })
    .then(onRouteChange("home"));  
   }
  return (
    <Form>
      <FieldSet>
        <Legend label="Sign In" />
        <Input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
        />

        <Input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
        />
      </FieldSet>
      <div>
        <Submit onClick={handleSubmit} label="Sign In" value="Sign In" />
      </div>
      <LinkContainer>
        <Link
          onRouteChange={() => onRouteChange("register")}
          label="Don't have an account ? Register"
        />
      </LinkContainer>
    </Form>
  );
}
