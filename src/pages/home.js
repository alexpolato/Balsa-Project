import { Button } from "../components/button";
import paths from "../utils/paths";
import { styled, TextField, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Input } from "../components/input";

function Home() {
  const [balsas, setBalsas] = useState([]);
  const [veiculos, setVeiculos] = useState(0);
  const [time, setTime] = useState("");
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    setVeiculos(3000);
    setBalsas([
      {
        id: 0,
        status: true,
        capacity: 50,
        timeCrossing: 60,
        timeLeaving: "10:00",
      },
      {
        id: 1,
        status: true,
        capacity: 70,
        timeCrossing: 50,
        timeLeaving: "11:20",
      },
      {
        id: 2,
        status: true,
        capacity: 100,
        timeCrossing: 40,
        timeLeaving: "10:10",
      },
      {
        id: 3,
        status: true,
        capacity: 40,
        timeCrossing: 60,
        timeLeaving: "11:30",
      },
      {
        id: 4,
        status: true,
        capacity: 50,
        timeCrossing: 60,
        timeLeaving: "10:45",
      },
      {
        id: 5,
        status: true,
        capacity: 60,
        timeCrossing: 50,
        timeLeaving: "11:15",
      },
    ]);
  }, []);

  const balsaGotOut = () => {
    const timeLeavingArray = balsas.map((balsa) => {
      const [hours, minutes] = balsa.timeLeaving.split(":");
      return Number(hours) * 60 + Number(minutes);
    });

    const nextBalsatoLeave = Math.min(...timeLeavingArray);
    const nextBalsatoLeaveIndex = timeLeavingArray.indexOf(nextBalsatoLeave);

    timeLeavingArray[nextBalsatoLeaveIndex] +=
      balsas[nextBalsatoLeaveIndex].timeCrossing;

    const newTimeLeaving = timeLeavingArray.map((timeLeave) => {
      const hoursBalsaleaving = Math.floor(timeLeave / 60);
      const minutesBalsaleaving = timeLeave % 60;
      return `${hoursBalsaleaving
        .toString()
        .padStart(2, "0")}:${minutesBalsaleaving.toString().padStart(2, "0")}`;
    });
    balsas.forEach((balsa, index) => {
      balsa.timeLeaving = newTimeLeaving[index];
    });

    setVeiculos(veiculos - balsas[nextBalsatoLeaveIndex].capacity);

    console.log(
      time + "--id " + balsas[nextBalsatoLeaveIndex].id + "---vei" + veiculos
    );
    console.log(newTimeLeaving);
  };

  // simulate a clock that speeds{
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

    setTime(
      `${hoursClock}:${minutesClock < 10 ? "0" : ""}${minutesClock}:${
        secondsClock < 10 ? "0" : ""
      }${secondsClock}`
    );

    if (veiculos >= 0) {
      balsas.forEach((balsa) => {
        if (balsa.timeLeaving <= time.slice(0, 5)) {
          balsaGotOut();
        }
      });
    }
  }, [currentTime]);
  // }

  return (
    <div>
      Home Page
      <div>
        login :<a href={paths.login}> login</a>' 'fila:
        <a href={paths.line}> fila</a>
        <div>{time}</div>
        <input
          type="range"
          min="0"
          max="101"
          step="1"
          value={speed}
          onChange={handleSpeedChange}
        />
        <p>Speed: {speed}</p>
        <Button>clique</Button>
      </div>
    </div>
  );
}

export default Home;
