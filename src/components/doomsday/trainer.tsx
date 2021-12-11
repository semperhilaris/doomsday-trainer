import React, { useState }  from 'react';
import Moment from 'react-moment';
import { Typography, Button, Box } from '@material-ui/core';

import { Lazy } from '../../components';
import { FCC } from '../../util';

function getRamdomDateInBetween(start: string, end: string) {
    const startDate = Date.parse(start);
    const endDate = Date.parse(end);

    return new Date(Math.floor(Math.random() * (endDate - startDate + 1) + startDate));
}

const DoomsdayTrainer: FCC = () => {
    const [date, setDate] = useState<Date>(getRamdomDateInBetween('1900-01-01', '2020-12-31'));
    const [showSolution, setShowSolution] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    function reset() {
        setShowSolution(false);
        setDate(getRamdomDateInBetween('1900-01-01', '2020-12-31'));
    }

    function check(solution: number) {
        setIsCorrect(date.getDay() === solution);
        setShowSolution(true);
    }

    return (
        <div>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
                The day of<br/>
                <strong><Moment format="YYYY-MM-DD">{ date }</Moment></strong><br/>
                is a …
                <Lazy type="fade" in={ showSolution } timeout={ {enter: 1500, exit: 0} }>
                    <div>
                        <Box sx={{ fontWeight: 'bold', color: isCorrect ? '#4caf50' : '#ef5350' }}>
                            <Moment format="dddd">{ date }</Moment>.
                        </Box>
                        <Button onClick={() => { reset() }} variant="contained" color="primary">NEW DATE</Button>
                    </div>
                </Lazy>
                <Lazy type="fade" in={ !showSolution } timeout={ {enter: 1500, exit: 0} }>
                    <div>
                        <Button variant="contained" color="primary" onClick={() => { check(1) }}>Mon</Button>&nbsp;
                        <Button variant="contained" color="primary" onClick={() => { check(2) }}>Tue</Button>&nbsp;
                        <Button variant="contained" color="primary" onClick={() => { check(3) }}>Wed</Button>&nbsp;
                        <Button variant="contained" color="primary" onClick={() => { check(4) }}>Thu</Button>&nbsp;
                        <Button variant="contained" color="primary" onClick={() => { check(5) }}>Fri</Button>&nbsp;
                        <Button variant="contained" color="primary" onClick={() => { check(6) }}>Sat</Button>&nbsp;
                        <Button variant="contained" color="primary" onClick={() => { check(0) }}>Sun</Button>
                    </div>
                </Lazy>
            </Typography>
        </div>
      );
};

export default DoomsdayTrainer;
