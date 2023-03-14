import paths from "../utils/paths";
import { styled, TextField, MenuItem, Input, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { DateHandler } from "../utils/dateHandler";
import { id } from "date-fns/locale";
import { grey } from "@mui/material/colors";

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

const date = new Date();
const ferryDay = date.getDate();
console.log(date);
const ferriesMock = [
  {
    id: 0,
    isActive: true,
    capacity: 50,
    timeCrossing: 60,
    timeLeaving: new Date(`2023-03-${ferryDay}T18:10:00`),
  },
  {
    id: 1,
    isActive: true,
    capacity: 70,
    timeCrossing: 50,
    timeLeaving: new Date(`2023-03-${ferryDay}T18:00:00`),
  },
  {
    id: 2,
    isActive: true,
    capacity: 100,
    timeCrossing: 40,
    timeLeaving: new Date(`2023-03-${ferryDay}T18:30:00`),
  },
  {
    id: 3,
    isActive: true,
    capacity: 40,
    timeCrossing: 60,
    timeLeaving: new Date(`2023-03-${ferryDay}T18:45:00`),
  },
  {
    id: 4,
    isActive: true,
    capacity: 50,
    timeCrossing: 60,
    timeLeaving: new Date(`2023-03-${ferryDay}T19:00:00`),
  },
  {
    id: 5,
    isActive: true,
    capacity: 60,
    timeCrossing: 50,
    timeLeaving: new Date(`2023-03-${ferryDay}T18:00:00`),
  },
];

function Home() {
  const [ferries, setFerries] = useState(ferriesMock);
  const [veiculos, setVeiculos] = useState(3000);
  const [time, setTime] = useState("");
  const [timeNoSeconds, setTimeNoSeconds] = useState("");
  const [speed, setSpeed] = useState(1);
  const [ferryTimeLeaving, setFerryTimeLeaving] = useState([
    ferries.timeLeaving,
  ]);

  //if a ferry got out, this function is called and update the time leaving
  //of this ferry.
  const ferryGotOut = (id) => {
    const ferryToLeave = ferries.find((ferry) => ferry.id === id);

    if (ferryToLeave) {
      const newTimeLeaving = new Date(
        ferryToLeave.timeLeaving.getTime() +
          ferryToLeave.timeCrossing * 60 * 1000
      );
      const updatedFerries = ferries.map((ferry) => {
        if (ferry.id === id) {
          setFerryTimeLeaving(newTimeLeaving);
          return { ...ferry, timeLeaving: newTimeLeaving };
        } else {
          return ferry;
        }
      });

      const updatedVeiculos = veiculos - ferryToLeave.capacity;

      setFerries(updatedFerries);
      setVeiculos(updatedVeiculos);
    }
  };

  // simulate a clock that speeds
  const [currentTime, setCurrentTime] = useState(new Date());

  const LineTime = () => {
    setCurrentTime((prevTime) => {
      const newTime = new Date(prevTime.getTime() + 1000 * speed);
      return newTime;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(LineTime, 1000 / speed);
    return () => clearInterval(intervalId);
  }, [speed]);

  const handleSpeedChange = (event) => {
    setSpeed(parseFloat(event.target.value));
  };

  useEffect(() => {
    let hoursClock = currentTime.getHours();
    let minutesClock = currentTime.getMinutes();
    let secondsClock = currentTime.getSeconds();
    let day = currentTime.getDate();
    setTime(
      `${hoursClock}:${minutesClock < 10 ? "0" : ""}${minutesClock}:${
        secondsClock < 10 ? "0" : ""
      }${secondsClock}--${day}`
    );

    setTimeNoSeconds(
      `${hoursClock < 10 ? "0" : ""}${hoursClock}:${
        minutesClock < 10 ? "0" : ""
      }${minutesClock}:00`
    );

    const activeFerries = ferries.filter((ferry) => ferry.isActive);
    if (veiculos > 0) {
      activeFerries.forEach((actFerry) => {
        if (
          actFerry.timeLeaving <= new Date(`2023-03-${day}T${timeNoSeconds}`)
        ) {
          ferryGotOut(actFerry.id);
          console.log(actFerry);
          console.log(time);
        }
      });
    }
  }, [currentTime]);

  //switch the ferry status (if the ferry is working or not)
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
  const handleTimeToLeave = (id, e) => {
    const updateTimeToLeave = ferries.map((ferry) => {
      if (ferry.id === id) {
        return {
          ...ferry,
          timeLeaving: (ferry.timeLeaving = e.target.value),
        };
      }
      return ferry;
    });
    setFerries(updateTimeToLeave);
    console.log(ferries);
  };

  // useEffect(() => {
  //   setInterval(function () {
  //     setFerryCardColor("white");
  //   }, 1000);
  //   console.log(ferryCardColor + "entrei no effect");
  //   if (ferryCardColor === "white") {
  //     setFerryCardColor("blue");
  //   }
  // }, [ferryTimeLeaving]);
  // useEffect(() => {
  //   const ferryToUpdate = ferries.find(
  //     (ferry) => ferry.id === ferryTimeLeaving
  //   );
  //   if (ferryToUpdate) {
  //     setFerryCardColor("blue");
  //     setTimeout(() => setFerryCardColor("white"), 5000); // Change color back after 5 seconds
  //   }
  // }, [ferryTimeLeaving]);

  return (
    <Container>
      <TextContainer style={{ flex: "3" }}>
        Home Page
        <div>
          login :<a href={paths.login}> login</a>' 'fila:
          <a href={paths.line}> fila</a>
        </div>
        <div>{time}</div>
        <input
          type="range"
          min="0"
          max="101"
          step="1"
          value={speed}
          onChange={handleSpeedChange}
          width="fit-content"
        />
        <p>Speed: {speed}</p>
        <div>{veiculos}</div>
      </TextContainer>
      <div style={{ flex: 1 }}>
        <TextContainer>Balsa</TextContainer>
        {ferries.map((ferry) => {
          const ferryCardStyle = {
            background:
              time &&
              DateHandler.rawFormat(ferry.timeLeaving, "yyyy-MM-dd hh:mm") ===
                DateHandler.rawFormat(currentTime, "yyyy-MM-dd hh:mm")
                ? "blue"
                : "white",
            border: ferryTimeLeaving,
          };
          return (
            <FerryContainer style={ferryCardStyle}>
              <TextContainer sx={{ width: "70%" }}>
                <TextTitle>{ferry.isActive}</TextTitle>
                <TextSub>{ferry.id}</TextSub>
                <TextSub>{ferry.timeLeaving.toString()}</TextSub>
              </TextContainer>
              <Input
                type="time"
                sx={{ border: "none" }}
                // onChange={(e) => handleTimeToLeave(ferry.id, e)}
              />
              <Switch onClick={() => handleSwitch(ferry.id)} defaultChecked />
            </FerryContainer>
          );
        })}
      </div>
      {/* <Button>clique</Button> */}
    </Container>
  );
}

export default Home;
