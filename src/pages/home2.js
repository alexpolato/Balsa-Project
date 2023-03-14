import { useEffect, useState } from "react";
import { DateHandler } from "../utils/dateHandler";
import styled from "@emotion/styled";
import { Switch } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const Container = styled(`div`)({
  display: "flex",
  maxWidth: 1000,
  margin: "0 auto",
  justifyContent: "space-between",
});

const FerryContainer = styled(`div`)({
  marginBottom: "20px",
  width: "300px",
  border: "1.5px solid #99E1D9",
  borderRadius: "10px",
  padding: "10px 30px",
  display: "flex",
  alignItems: "center",

  boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

  justifyContent: "space-between",
});

const TextContainer = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
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

const ferriesMock = [
  {
    id: "aaa",
    name: "Balsa veloz",
    isActive: true,
    capacity: 50,
    timeCrossing: 30,
    timeLeaving: [
      "2023-02-03T12:00:00",
      "2023-02-03T12:30:00",
      "2023-02-03T13:00:00",
      "2023-02-03T13:30:00",
      "2023-02-03T14:00:00",
      "2023-02-03T14:30:00",
    ],
  },
  {
    id: "bbb",
    name: "Balsa mini",
    isActive: true,
    capacity: 20,
    timeCrossing: 30,
    timeLeaving: [
      "2023-02-03T12:00:00",
      "2023-02-03T12:40:00",
      "2023-02-03T13:10:00",
      "2023-02-03T13:40:00",
      "2023-02-03T14:10:00",
      "2023-02-03T14:40:00",
    ],
  },
];

function Home2() {
  const [lineLength, setLineLength] = useState(250);
  const [ferries, setFerries] = useState(ferriesMock);

  function calculateLineTime() {
    const activeFerries = ferries.filter((ferry) => ferry.isActive);

    let allTimeLeving = [];

    for (let x = 0; x < activeFerries.length; x++) {
      const currentFerry = activeFerries[x];
      for (let y = 0; y < currentFerry.timeLeaving.length; y++) {
        const currentTimeLeving = currentFerry.timeLeaving[y];
        allTimeLeving.push({
          timeLeaving: currentTimeLeving,
          ferryId: currentFerry.id,
        });
      }
    }

    allTimeLeving.sort(function (b, a) {
      return new Date(b.timeLeaving) - new Date(a.timeLeaving);
    });

    let lineAux = lineLength;
    let timeToLeaveFinalFerry;
    for (let z = 0; z < allTimeLeving.length; z++) {
      const currentData = allTimeLeving[z];
      if (lineAux > 0) {
        lineAux =
          lineAux -
          ferries.find((ferry) => ferry.id === currentData.ferryId).capacity;
        timeToLeaveFinalFerry = currentData.timeLeaving;
      }
    }

    // console.log(allTimeLeving);

    return timeToLeaveFinalFerry;
  }
  // console.log(balsaStatus + " id " + ferries.id);
  const handleSwitch = (id) => {
    const updateFerryState = ferries.map((ferry) => {
      if (ferry.id === id) {
        return {
          ...ferry,
          isActive: !ferry.isActive,
        };
      }
      return ferry;
    });
    setFerries(updateFerryState);
    // console.log(ferries);
  };
  let ferryCardColor = "";

  return (
    <Container>
      <TextContainer style={{ width: "70%", flex: "3" }}>
        Tempo da fila
        <FerryContainer>
          <AccessTime sx={{ fontSize: 50, color: "#50A9B0" }} />
          <TextTitle>
            {" "}
            {DateHandler.formatUtc(calculateLineTime(), "HH:mm dd/MM/yy")}
          </TextTitle>
        </FerryContainer>
      </TextContainer>

      <div style={{ flex: 1 }}>
        <TextContainer>Balsa</TextContainer>
        {ferries.map((ferry) => {
          if (ferry.isActive === false) {
            ferryCardColor = "#A68F97";
          } else if (ferry.isActive) {
            ferryCardColor = "white";
          }
          return (
            <FerryContainer
              style={{
                background: ferryCardColor,
                borderColor: ferryCardColor,
              }}
            >
              <TextContainer sx={{ width: "70%" }}>
                <TextTitle>{ferry.name}</TextTitle>
                <TextSub>{ferry.id}</TextSub>
              </TextContainer>
              <Switch onClick={() => handleSwitch(ferry.id)} defaultChecked />
            </FerryContainer>
          );
        })}
      </div>
    </Container>
  );
}

export default Home2;
