import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {MenuItem, NativeSelect, Select, TextField} from "@material-ui/core";


const ResultLool3 = () => {


    return (
        <div>
            <TextField style={{width:700}} autoFocus id="standard-name"  multiline  defaultValue=""
                       variant="filled" rows={10} />
            <div>
                Операція
                <NativeSelect
                    value={"state.name"}
                    style={{marginLeft: 23}}

                    name="name"
                    inputProps={{
                        id: 'name-native-error',
                    }}
                >
                    <optgroup label="Author">
                        <option value="hai">Розшифрувати</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>

            </div>

            <Button size="small">
                Виконати
            </Button>
            <div>
                <Button size="small">
                    Завантажити
                </Button>
                <Button size="small">
                    Автор
                </Button>

            </div>
            <div>
                Результат
                <TextField style={{width:700}} autoFocus id="standard-name"  multiline
                           variant="filled" rows={10} defaultValue=""  />
            </div>
        </div>
    );
};

export default ResultLool3;