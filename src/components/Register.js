import React, { useState, useContext } from "react";
import styled from "styled-components";
import { app } from "../base";
import { AuthContext } from "./AuthProvider";
import { useHistory } from "react-router-dom";

const Register = () => {
  const dis = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSub = async () => {
    await app.auth().createUserWithEmailAndPassword(email, password);
    dis.push("/");
  };

  const onSubIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    dis.push("/");
  };

  return (
    <Container>
      {currentUser?.uid}
      <Wrapper>
        <Input
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button onClick={onSub}>Sign Up</Button>
        <Button onClick={onSubIn}>Sign In</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Button = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  transform: scale(1);
  background-color: red;
  color: #ffffff;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 40px;

  :hover {
    transform: scale(0.97);
  }
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  font-size: 20px;
  padding-left: 10px;
  margin: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
