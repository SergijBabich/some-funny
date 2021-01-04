import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {
    saveCountLessons,
    saveCountMsg,
    saveCountOfFriends,
    saveCountOfLends,
    saveCountOfTasks, saveMarkOfDiploma, saveSetGoalEducation,
} from "../../redux/reducer";
import {Redirect} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

const getSteps = () => {

    return [
        'Сколько лекциий вы посетили?',
        'Сколько сообщений вы отправили старосте?',
        'Сталько заданий вы сделали?',
        'Сколько у вас долгов?',
        'Сколько у вас друзей?',
        'Какую оценку вы получили курсовую работу?',
        'Какая ваша цель в обучении?'
    ];
}

const useStylesForm = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const GetStepContent = ({ step }) => {
    const classes = useStylesForm();
    const dispatch = useDispatch();

    const onCountLessons = (event) => {
        const { value } = event.target;
        dispatch(saveCountLessons(value));
    }

    const onCountMsgToClassMother = (event) => {
        const { value } = event.target;
        dispatch(saveCountMsg(value));
    }

    const onCountOfTasks = (event) => {
        const { value } = event.target;
        dispatch(saveCountOfTasks(value));
    }

    const onCountOfLends = (event) => {
        const { value } = event.target;
        dispatch(saveCountOfLends(value));
    }

    const onCountOfFriends = (event) => {
        const { value } = event.target;
        dispatch(saveCountOfFriends(value));
    }

    const onMarkOfDiploma = (event) => {
        const { value } = event.target;
        dispatch(saveMarkOfDiploma(value));
    }

    const onSetGoalEducation = (event) => {
        const { value } = event.target;
        dispatch(saveSetGoalEducation(value));
    }

    switch (step) {
        case 0:
            return (
                <>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField autoFocus id="count-of-lessons" type={"number"} label="lessons" onChange={onCountLessons} />
                    </form>
                    </>
            );
        case 1:
            return (
                <>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField autoFocus id="standard-name" type={"number"} label="count" onChange={onCountMsgToClassMother} />
                    </form>
                </>
            );
        case 2:
            return (
                <>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField autoFocus id="standard-name" type={"number"} label="count" onChange={onCountOfTasks} />
                    </form>
                </>
            );
        case 3:
            return (
                <>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField autoFocus id="standard-name" type={"number"} label="count" onChange={onCountOfLends} />
                    </form>
                </>
            );
        case 4:
            return (
                <>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField autoFocus id="standard-name" type={"number"} label="count" onChange={onCountOfFriends} />
                    </form>
                </>
            );
        case 5:
            return (
                <>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField autoFocus id="standard-name" type={"number"} label="count" onChange={onMarkOfDiploma} />
                    </form>
                </>
            );
        case 6:
            return (
                <>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField autoFocus id="standard-name" label="desc" onChange={onSetGoalEducation} />
                    </form>
                </>
            );
        default:
            return 'Unknown step';
    }
}

const From = () => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>
                                <GetStepContent step={index} />
                            </Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
               <Redirect to="/loading" />
            )}
        </div>
    )
};

export default From;