import paths from "../utils/paths";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../autentication/auth";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Root = styled(`div`)({
  background: "white",
  display: "flex",
  flexDirection: "column",
  //   justifyContent: "center",

  margin: "50px auto",
  width: "fit-content",
  padding: "20px 50px 20px 50px",
  borderRadius: "5px",
  boxShadow: " 0px 5px 15px 0px rgba(0,0,0,0.1)",
  Button: {
    width: "100%",
  },
});

const Title = styled(`div`)({
  padding: "20px 0",
  etterSpacing: "-.2px",
  color: "#372248",
  fontFamily: "sohne-var,sohne-woff,Helvetica Neue,Arial,sans-serif",
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "32px",
});

const Text = styled(`div`)({
  paddingBottom: "20px",
  etterSpacing: "-.2px",
  color: "#372248",
  fontFamily: "sohne-var,sohne-woff,Helvetica Neue,Arial,sans-serif",
  fontWeight: "500",
  lineHeight: "32px",
});

const StyledInput = styled(Input)({
  margin: "10px 0 30px 0",
});

const StyledButton = styled(Button)({
  Button: {
    background: "white",
    color: "#3142D8",
    border: "none",
    margin: "0 auto",
    width: "fit-content",
    justifyContent: "center",
    "&:hover": {
      background: "none",
      color: "black",
    },
    display: "flex",
    alignItems: "center",
  },
});

function ForgotPassword() {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");

  const hadleForgotPass = async (event) => {
    try {
      const result = await resetPassword(email);
      console.log(result);
      toast.success("Check your email inbox");
    } catch (error) {
      alert(error);
      toast.error("Error Notification !");
    }
  };

  return (
    <Root>
      <Title>Redefinir sua senha</Title>
      <Text>Informe o email de sua conta para proceder.</Text>
      <StyledInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
      />
      <Button onClick={hadleForgotPass}>Continuar</Button>
      <Toaster />
      <StyledButton
        onClick={() => {
          navigate(paths.login);
        }}
      >
        Voltar ao login
      </StyledButton>
    </Root>
  );
}

export default ForgotPassword;
