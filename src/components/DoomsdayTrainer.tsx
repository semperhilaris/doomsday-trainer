import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { Typography, Button, Box, Fade } from '@mui/material';

function getRamdomDateInBetween(start: string, end: string) {
  const startDate = Date.parse(start);
  const endDate = Date.parse(end);

  return new Date(
    Math.floor(Math.random() * (endDate - startDate + 1) + startDate),
  );
}

export default function DoomsdayTrainer() {
  const today = moment(new Date()).format(`YYYY-MM-DD`);
  const [date, setDate] = useState<Date>(
    getRamdomDateInBetween(`1900-01-01`, today),
  );
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!showSolution) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  function reset() {
    setSeconds(0);
    setShowSolution(false);
    setDate(getRamdomDateInBetween(`1900-01-01`, today));
  }

  function check(solution: number) {
    setIsCorrect(date.getDay() === solution);
    setShowSolution(true);
  }

  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="white"
        gutterBottom
      >
        The day of
        <br />
        <strong>
          <Moment format="YYYY-MM-DD">{date}</Moment>
        </strong>
        <br />
        is a …
        <Fade in={showSolution} timeout={{ enter: 1500, exit: 0 }}>
          <div>
            <Box
              sx={{
                fontWeight: `bold`,
                color: isCorrect ? `#4caf50` : `#ef5350`,
              }}
            >
              <Moment format="dddd">{date}</Moment>.
            </Box>
            <Box sx={{ fontSize: `1rem`, color: `#808080` }}>
              Your time: <strong>{seconds}</strong> seconds.
            </Box>
            <Button
              onClick={() => {
                reset();
              }}
              variant="contained"
              color="primary"
            >
              NEW DATE
            </Button>
          </div>
        </Fade>
        <Fade in={!showSolution} timeout={{ enter: 1500, exit: 0 }}>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                check(1);
              }}
            >
              Mon
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                check(2);
              }}
            >
              Tue
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                check(3);
              }}
            >
              Wed
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                check(4);
              }}
            >
              Thu
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                check(5);
              }}
            >
              Fri
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                check(6);
              }}
            >
              Sat
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                check(0);
              }}
            >
              Sun
            </Button>
          </div>
        </Fade>
      </Typography>
    </div>
  );
}
