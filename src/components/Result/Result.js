import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useSelector} from "react-redux";
import {draftSafeSelector} from "../../redux/reducer";
import Button from "@material-ui/core/Button";
import * as url from "url";
import image from '../../img/back.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        description: '',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    lol: {
        backgroundImage: "url(image)",
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const Result = () => {

    const classes = useStyles();
    const resultData = useSelector(draftSafeSelector);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNext = () => {
      alert("Сообщение от мамы: ты че псина не учишься? Больше денег на бухич хуй получишь!")
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Итоги года" />
                    <Tab label="Личная жизнь"  />
                    <Tab label="Профессиональные навыки"  />
                    <Tab label="Ваша цель"  />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.lol} value={value} index={0}>
                <div>
                    <div>
                        <div>
                            <h1>Ваши итоги <span style={{color: "aqua", fontSize: 40}}>2020</span> года</h1>
                            <h3> В этом году вы постарались на славу, важи достижение невозможно повторить нормальному человеку!</h3>
                            <h3>Ведь какой еще идтиот согласится сходить <span style={{color: "red", fontSize: 30}}>{resultData.lessonsPassedCount}</span> раз на пары в семестр</h3>
                            <h3>Наша команда плакала стоя увидев это число</h3>

                            <h3>Вы прослушали <span style={{color: "red", fontSize: 40}}>{resultData.lessonsPassedCount * 120}</span> минут лекций</h3>
                            <h3>Это как <span style={{color: "red", fontSize: 40}}>{resultData.lessonsPassedCount * 40}</span> клипов Могренштерна или <span style={{color: "aqua", fontSize: 40}}>{(resultData.lessonsPassedCount / 2).toFixed(0)}</span> каток в контру!</h3>
                            <h3>За это время вы смогли выучить абсолютно <b>нихуя</b> и проебать очередные пол года своей жизни, с чем мы вас искренне поздравляем</h3>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                    <h2>Вы <span style={{color: "aqua", fontSize: 40}}>{resultData.countOfMsg}</span> заебали старосту сообщениями "А меня еще не отчислили?"</h2>
                    <h2>Это на <span style={{color: "red", fontSize: 40}}>{resultData.countOfMsg}</span> сообщений больше чем твоей девушке, ибо у тебя ее нет!</h2>
                    <h2>Ваш любимый день недели - Пятница, ведь как не в пятницу можно начать готовить задания на следующую неделю, в то время как ваши одногрупники
                            устраивают рейвы в падиках, и строят личную жизнь!</h2>

                    <h2>За этот семетр у вас стало на <span style={{color: "aqua", fontSize: 40}}>{resultData.countOfFriends}</span> друзей меньше, но это по прежнему 0.</h2>
                    <h2 > За то ты <strike>прочитал</strike> пролистал книгу от "Бизнес молодость". Теперь ты акула ставок на спорт и финансовых пирамид</h2>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div>
                    <h1> Вы спиздили <span style={{color: "red", fontSize: 30}}>{resultData.countOfTasks}</span> готовых заданий из которых: </h1>
                    <ul style={{fontSize: 24}}>
                        <li>{(resultData.countOfTasks/ 5).toFixed(0)} - лабы (<a href={"https://ru.wiktionary.org/wiki/%D0%9B%D0%B0%D0%B1%D0%B0"}> Узнать опредиление слова лаба</a>)</li>
                        <li>{(resultData.countOfTasks/ 2).toFixed(0)} - дoмашки (<a href={"https://www.bbc.com/russian/science/2013/12/131212_dementia_five_ways"}>Купить лекарство от слабоумия</a>)</li>
                        <li>{(resultData.countOfTasks/ 3).toFixed(0)} - контрольных (<a href={""}> Тут может быть ваша реклама.</a>)</li>

                    </ul>

                    <div>
                        <h1> У вас осталось <span style={{color: "red", fontSize: 40}}>{resultData.countOfLends}</span> долгов по предметам! Ну хоть в чем-то мы можем вами гордиться</h1>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            Отправить достижение маме
                        </Button>

                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div>
                    <div>
                        <h1> Ваша оценка <span style={{color: "aqua", fontSize: 40}}>{resultData.mark}</span> за курсовую роботу</h1>
                        <h1> Ну как говориться каждый делает в своей жизни ошибки </h1>

                    </div>
                    <div>
                        <h2> Ваша цель в жизни </h2>
                        <h1><span style={{color: "aqua", fontSize: 40}}>{resultData.goal}</span></h1>
                        <h1>Что прямо диаметрально тому чем ты сейчас занимаешься, да да, высунь руки из под стола, шалун балун, я все вижу!</h1>
                    </div>
                </div>
            </TabPanel>
        </div>
    );
};

export default Result;