import { Form } from './form-components/Form'
import { FieldSet } from './form-components/FieldSet'
import Legend from './form-components/Legend'
import Input from './form-components/Input'
import Submit from './form-components/Submit'
import Link from './form-components/Link'
import { LinkContainer } from './form-components/LinkContainer'


export default function SignIn({onRouteChange}) {
  return (
    <Form>
      <FieldSet>
        <Legend label="Sign In" />
        <Input type="email" name="email" placeholder="Email" label="Email" />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
        />
      </FieldSet>
      <div>
        <Submit
          onClick={() => onRouteChange("home")}
          label="Sign In"
          value="Sign In"
        />
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
