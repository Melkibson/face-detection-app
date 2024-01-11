import { Form } from "./form-components/Form";
import { FieldSet } from "./form-components/FieldSet";
import Legend from "./form-components/Legend";
import Input from "./form-components/Input";
import Submit from "./form-components/Submit";
import Link from "./form-components/Link";
import { LinkContainer } from "./form-components/LinkContainer";

export default function Register({onRouteChange}) {
  return (
    <Form>
      <FieldSet>
        <Legend label="Register" />
        <Input type="text" name="name" placeholder="Name" label="Name" />
        <Input type="email" name="email" placeholder="Email" label="Email" />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
        />
      </FieldSet>
      <div>
        <Submit onClick={() => onRouteChange('home')} label="Register" value="Register" />
      </div>
      <LinkContainer>
        <Link onRouteChange={() => onRouteChange('signin')} label="Already have an account ? Sign up" />
      </LinkContainer>
    </Form>
  );
}
