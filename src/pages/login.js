import React, { useState } from "react";
import paths from "../utils/paths";
import { useAuth } from "../autentication/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/index";
import { styled } from "@mui/material";
import { Input } from "../components/input/index";
import toast, { Toaster } from "react-hot-toast";

//style
const PageContainer = styled(`div`)({
  // minHeight: "100vh",
  padding: "50px 0",
});

const Root = styled(`div`)({
  background: "white",
  display: "flex",
  flexDirection: "column",
  //   justifyContent: "center",

  margin: "0 auto",
  width: "fit-content",
  padding: "40px 70px 50px 70px",
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
  Button: {
    width: "100%",
  },
});

// const AContainer = styled("div")({
//   marginTop: "-5px",
// });

//other
const defaultData = {
  email: "",
  password: "",
};

function Login() {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState(defaultData);
  const handleSignUp = async (event) => {
    try {
      const result = await logIn(data.email, data.password);
      navigate(paths.home);
      console.log(result);
    } catch (error) {
      // alert(error);
      toast.error("Error Notification !");
    }
  };

  return (
    <PageContainer>
      <Root>
        <Title>Acesse sua conta</Title>
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
              label="Senha"
              value={data.password}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              name="password"
              type="password"
            />
            <label>
              <a
                href={paths.forgotpass}
                style={{
                  textDecorationLine: "none",
                  color: "#3142D8",
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                Esqueceu sua senha?
              </a>
            </label>
          </InputContainer>
          <StyledButton onClick={handleSignUp}>Logar</StyledButton>
          <Toaster />
        </Container>
      </Root>
    </PageContainer>
  );
}

export default Login;
