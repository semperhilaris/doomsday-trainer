import React, { useState }  from 'react';
import Moment from 'react-moment';
import { Typography, Button } from '@material-ui/core';

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

    function reset() {
        setShowSolution(false);
        setDate(getRamdomDateInBetween('1900-01-01', '2020-12-31'));
    }

    return (
        <div>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
                The day of<br/>
                <strong><Moment format="YYYY-MM-DD">{ date }</Moment></strong><br/>
                is a …
                <Lazy type="fade" in={ showSolution } timeout={ {enter: 1500, exit: 0} }>
                    <div>
                        <strong><Moment format="dddd">{ date }</Moment>.</strong><br/>
                        <Button onClick={() => { reset() }} variant="contained" color="primary">NEW DATE</Button>
                    </div>
                </Lazy>
                <Lazy type="fade" in={ !showSolution } timeout={ {enter: 1500, exit: 0} }>
                    <Button onClick={() => { setShowSolution(true) }} variant="contained" color="primary">CHECK</Button>
                </Lazy>
            </Typography>
        </div>
      );
};

export default DoomsdayTrainer;
