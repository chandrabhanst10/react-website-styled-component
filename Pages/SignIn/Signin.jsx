import React from "react";
import { Form, FormBtnContainer, FormButton, FormContent, FormH1, FormInput, FormLabel, Icon, SignInContainer, SignInWrapper, Text } from "./SigninElements";

const Signin = () => {
  return (
    <SignInContainer>
    <Icon to="/">Dollar</Icon>

      <SignInWrapper>
        <FormContent>
          <Form>
            <FormH1>Sing in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormBtnContainer>
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot Password</Text>
            </FormBtnContainer>
            
          </Form>
        </FormContent>
      </SignInWrapper>
    </SignInContainer>
  );
};

export default Signin;
