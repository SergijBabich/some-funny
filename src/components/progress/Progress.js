import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Redirect, useHistory} from "react-router";

function LinearProgressWithLabel(props) {
    const [loadLabel, setLoadLabel] = useState("Выполняется анализ данных");

    useEffect(() => {
        setTimeout(() => {
            setLoadLabel("Блядь, как же лень");
        }, 2000);
    }, [])

    setTimeout(() => {
      setLoadLabel("Выполняется поиск пали для анализа данных");
    }, 4000);

    return (
        <div style={{width: "calc(100vw - 600px)", margin: "auto", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Box display="flex" style={{flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", fontWeight: 20}}  alignItems="center">
                <Box minWidth={35}>
                    <Typography style={{fontWeight: 20}} variant="body1" color="textSecondary">{loadLabel}</Typography>
                </Box>
                <Box width="100%" mr={1}>
                    <Box width="100%" mr={1}>
                        <LinearProgress variant="determinate" {...props} />
                    </Box>
                    <Box minWidth={35}>
                        <Typography variant="body2" color="textSecondary">{`${Math.round(
                            props.value,
                        )}%`}</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const Progress = () => {
    const history = useHistory();
    const classes = useStyles();
    const [progress, setProgress] = React.useState(1);

    const onRedirect = () => {
        history.push("/result-page");
    }
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? onRedirect() : prevProgress + 1));
        }, 80);

        return () => {
            clearInterval(timer);
        };
    }, [])

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel value={progress} />
        </div>
    )
};
export default Progress;