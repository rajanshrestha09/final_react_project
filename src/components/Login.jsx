import React from "react";
import { Button, Input } from "./index";

function Login() {
  return (
    <div>
      <Input label='Email' placeholder=' Enter your email' type='email' />
      <Input label='password' placeholder=' Enter your password' type='email' />
      <Button> Signup </Button>
    </div>
  );
}

export default Login;
