import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Layout from "../../components/ui/Layout";
import { Api, setAuthToken } from "../../utils/login";
import { useUserDispatch } from "../../context/userContext";
import { setAuthToken as setGqlAuthToken } from "../../utils/gql";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useUserDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const authToken = await Api.login(username, password);
    if (authToken) {
      setAuthToken(authToken);
      setGqlAuthToken(authToken);
      const userData = await Api.whoami(authToken);
      localStorage.setItem("token", authToken);
      dispatch({ type: "login", value: { token: authToken, userData } });
      // Navigate to the home page
      navigate(`${import.meta.env.BASE_URL}home/`);
    } else {
      // Handle unsuccessful login
    }
  };
  console.log(username);

  return (
    <Layout>
      <div className="Login__Container">
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label for="username">Username:</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </Layout>
  );
}

export default Login;
