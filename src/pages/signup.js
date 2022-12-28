import React, { useState } from "react";
import paths from "../utils/paths";
import { useAuth } from "../autentication/auth";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { styled } from "@mui/material";

const defaultData = {
  email: "",
  password: "",
};

//style
const PageContainer = styled(`div`)({
  padding: "50px 0",
});

const Root = styled(`div`)({
  background: "white",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  width: "fit-content",
  padding: "40px 70px 40px 70px",
  borderRadius: "5px",
  boxShadow: " 0px 5px 15px 0px rgba(0,0,0,0.1)",
});

const Container = styled(`div`)({
  display: "flex",
  flexDirection: "column",

  background: "",

  marginTop: "20px",
});

const InputContainer = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "40px",
  gap: 20,
});

const Title = styled(`div`)({
  etterSpacing: "-.2px",
  color: "#372248",
  fontFamily: "sohne-var,sohne-woff,Helvetica Neue,Arial,sans-serif",
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "32px",
});

const StyledInput = styled(Input)({
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  display: "flex",
  justifyContent: "space-around",

  Button: {
    width: "100%",
    gap: "20px",
  },
});

const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  Button: {
    width: "100%",
    gap: "20px",
  },
});

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState(defaultData);

  const handleSignUp = async (event) => {
    try {
      const result = await signUp(data.email, data.password);
      console.log(result);
      navigate(paths.home);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <PageContainer>
      <Root>
        <Title>SignUp</Title>
        <Container>
          <InputContainer>
            <StyledInput
              label="Email"
              value={data.email}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
              name="email"
              type="email"
            />
            <StyledInput
              label="Password"
              value={data.password}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              name="password"
              type="password"
            />
          </InputContainer>
          <ButtonContainer>
            <StyledButton onClick={handleSignUp} type="submit">
              SignUp
            </StyledButton>
            <label
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              Possui conta?
              <a
                href={paths.login}
                style={{
                  textDecorationLine: "none",
                  color: "#3142D8",
                }}
              >
                Acessar
              </a>
            </label>
          </ButtonContainer>
        </Container>
      </Root>
    </PageContainer>
  );
};

export default SignUp;
