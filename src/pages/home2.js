import { Button } from "../components/button";
import paths from "../utils/paths";
import { useEffect, useState } from "react";
import { DateHandler } from "../utils/dateHandler";
import styled from "@emotion/styled";

const Container = styled(`div`)({
  display: "flex",
  maxWidth: 1000,
  margin: "0 auto",
  justifyContent: "space-between",
});
const FerryContainer = styled(`div`)({
  display: "flex",
  boxShadow: "0px 1px 4px rgba(0,0,0,0.2)",
  padding: "10px 20px",
  borderRadius: "10px",
  marginBottom: "10px",
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
  const [time, setTime] = useState("");

  function calculateLineTime() {
    const activeFerries = ferries.filter((ferry) => ferry.isActive);
    let minutes = 0;
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

    console.log(allTimeLeving);

    return timeToLeaveFinalFerry;
  }

  return (
    <Container>
      <div style={{ flex: 3 }}>
        Home Page
        <div>
          {DateHandler.formatUtc(calculateLineTime(), "HH:mm dd/MM/yy")}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        Balsa
        {ferries.map((ferry) => {
          return (
            <FerryContainer>
              <div>
                <h1>{ferry.name}</h1>
                <p>{ferry.id}</p>
              </div>
              <div>{ferry.isActive}</div>
            </FerryContainer>
          );
        })}
      </div>
    </Container>
  );
}

export default Home2;
