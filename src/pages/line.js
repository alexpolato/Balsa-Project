import { styled } from "@mui/material";
import { AccessTime, DirectionsCar, Lock } from "@mui/icons-material";
import { Button } from "../components/button";
import { useState } from "react";
import paths from "../utils/paths";
import { useNavigate } from "react-router";
import { Popup } from "../components/dialog/popup";
import { Form } from "../components/carForm/form";

const Root = styled(`div`)({
  margin: "30px 0",
});

const Container = styled(`div`)({
  display: "flex",
  justifyContent: "space-around",
});

const CardContainer = styled(`div`)({
  display: "flex",
  flexDirection: "column",

  gap: "30px",
});

const Card = styled(`div`)({
  width: "300px",
  border: "1.5px solid #99E1D9",
  borderRadius: "10px",
  padding: "10px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  gap: "100px",
});

const TextContainer = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Roboto, sans-serif",
});

const TextTitle = styled(`div`)({
  fontSize: "30px",
});
const TextSub = styled(`div`)({
  fontSize: "15px",
  textAlign: "center",
  maxWidth: "250px",
  //
});
const Text = styled(`div`)({
  fontSize: "10px",
  color: "#688291",
  textAlign: "center",
});

const StyledButton = styled(Button)({
  Button: {
    background: "#50A9B0",
    padding: "20px 40px",
    "&:hover": {
      background: "#077187",
    },
  },
});

function Line() {
  // const [people, setPeople] = useState();
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  return (
    <Root>
      <Container>
        <Card>
          <TextContainer>
            <TextTitle>Funcionamento</TextTitle>
            <TextSub sx={{ lineHeight: "30px", marginTop: "20px" }}>
              Ao entrar na fila terá de ser feito o cadastro do carro, quando
              completar o cadastro corretamente você estará na fila. Após o
              cadastro aparacerá uma tela parecida com essa, com as informações
              do seu lugar na fila, o tempo estimado (caso chegue atrasado por
              10 min ou mais, perderá seu lugar) e numero do carro que está em
              primeiro lugar na fila.
            </TextSub>
          </TextContainer>
        </Card>
        <CardContainer>
          <Card>
            <AccessTime sx={{ fontSize: 70, color: "#50A9B0" }} />
            <TextContainer sx={{ width: "70%" }}>
              <TextTitle>1:10</TextTitle>
              <TextSub>hora</TextSub>
              <Text>estimado de espera</Text>
            </TextContainer>
          </Card>
          <Card>
            <DirectionsCar sx={{ fontSize: 70, color: "#50A9B0" }} />
            <TextContainer sx={{ width: "70%" }}>
              <TextTitle>50</TextTitle>
              <TextSub>veiculos</TextSub>
              <Text>na fila</Text>
            </TextContainer>
          </Card>
          <Card>
            <Lock
              sx={{
                fontSize: 70,
                color: "#50A9B0",
              }}
            />
            <TextContainer sx={{ width: "70%" }}>
              <TextTitle>Bloqueado</TextTitle>
              <TextSub>entre na fila</TextSub>
              <Text> pegue uma posicao</Text>
            </TextContainer>
          </Card>
          <StyledButton
            style={{ background: "antiquewhite" }}
            onClick={() => setOpenPopup(true)}
          >
            Entrar na fila
          </StyledButton>
        </CardContainer>
      </Container>
      <Popup
        title={"Formulario"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Form />
      </Popup>
    </Root>
  );
}

export default Line;
