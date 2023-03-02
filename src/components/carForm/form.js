import { Input } from "../input";
import { Button } from "../button";
import { styled, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  width: "300px",
});

const BoxConteiner = styled("div")({});

const ContainerRadio = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
  fontSize: "13px",
  fontWeight: "medium",
  fontFamily: `sans-serif`,
  gap: "10px",
});

const SubContainerRadio = styled("div")({
  display: "flex",
  gap: "15px",
});

const SubContainerRadio2 = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "2.5px",
});

const Text = styled("div")({
  fontSize: "15px",
});

const StyledInput = styled(Input)({
  Input: {
    width: "90%",
    padding: " 11px 14px",
    display: "flex",
    alignItems: "center",
    border: "0 0 0 3px",
  },
});

const Label = styled(`label`)({
  fontSize: "13px",
  display: "block",
  fontWeight: "medium",
  fontFamily: `sans-serif`,
  color: "rgba(0, 0, 0, 0.6)",
});

const StyledButton = styled(Button)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
});

export function Form() {
  // const [tel, setTypeTell] = useState(Boolean);
  // const [email, setTypeEmail] = useState(Boolean);
  const [preference, setPreference] = useState("");
  const [timer, setTimer] = useState("");

  return (
    <>
      <Container>
        {/* <BoxConteiner> */}
        <StyledInput label="Placa" name="placa" maxLength="7" />

        <Box>
          <Label>Preferencial</Label>

          <TextField
            select
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            fullWidth
            size="small"
          >
            <MenuItem value="deficiente">Deficiente</MenuItem>
            <MenuItem value="idoso">Idoso</MenuItem>
            <MenuItem value="gestante">Gestante</MenuItem>
            <MenuItem value="crianca">
              Sozinho com crianca de ate 2 anos
            </MenuItem>
          </TextField>
        </Box>

        <ContainerRadio>
          {/* <Text>Quando chegar sua vez</Text> */}
          <form>
            <Label>Ser avisado</Label>
            <SubContainerRadio>
              <SubContainerRadio2>
                <StyledInput
                  type="radio"
                  name="contact"
                  // value={email}
                  // onChange={() => {
                  //   setTypeEmail(true);
                  // }}
                  checked
                  fullWidth
                />
                <div>E-mail</div>
              </SubContainerRadio2>
              <SubContainerRadio2>
                <StyledInput
                  type="radio"
                  name="contact"
                  // value={tel}
                  // onChange={() => {
                  //   setTypeTell(true);
                  // }}
                />

                <div>Telefone</div>
              </SubContainerRadio2>
            </SubContainerRadio>
          </form>
        </ContainerRadio>
        {/* </BoxConteiner> */}
        {/* <BoxConteiner> */}

        <Box marginTop="10px">
          <Label>Tempo de antecedência</Label>
          <TextField
            // label="Preferencial"
            select
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            fullWidth
            size="small"
            // helperText="Selecione o quao antes deseja ser chamado"
          >
            <MenuItem value="10min">10 minutos</MenuItem>
            <MenuItem value="20min">20 minutos</MenuItem>
            <MenuItem value="30min">30 minutos</MenuItem>
            <MenuItem value="45min">45 minutos</MenuItem>
            <MenuItem value="1hora">1 hora</MenuItem>
          </TextField>
        </Box>
        {/* </BoxConteiner> */}
      </Container>
      <StyledButton>Enviar</StyledButton>
    </>
  );
}
