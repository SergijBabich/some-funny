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


const ResultLool2 = () => {


    return (
        <div>
            <TextField style={{width:700}} autoFocus id="standard-name"  multiline  defaultValue="привіт"
                       variant="filled" rows={10} />
            <div>
                Авфавіт
                <NativeSelect
                    value={"state.name"}
                       style={{marginLeft: 23}}
                    name="name"
                    inputProps={{
                        id: 'name-native-error',
                    }}
                >
                    <optgroup label="Author">
                        <option value="hai">Українська</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>
            </div>
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
                        <option value="hai">Зашифрувати</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>
            </div>
            <div>
                Метод
                <NativeSelect
                    value={"state.name"}
                    style={{marginLeft: 23}}

                    name="name"
                    inputProps={{
                        id: 'name-native-error',
                    }}
                >
                    <optgroup label="Author">
                        <option value="hai">Лінійний</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>
            </div>
            <div>
                ключ1
                <NativeSelect
                    value={"state.name"}
                    style={{marginLeft: 23}}

                    name="name"
                    inputProps={{
                        id: 'name-native-error',
                    }}
                >
                    <optgroup label="Author">
                        <option value="hai">1</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>
            </div>
            <div>
                Ключ2
                <NativeSelect
                    value={"state.name"}
                    style={{marginLeft: 23}}

                    name="name"
                    inputProps={{
                        id: 'name-native-error',
                    }}
                >
                    <optgroup label="Author">
                        <option value="hai">1</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>
            </div>
            <div>
                Ключ 3
                <NativeSelect
                    value={"state.name"}
                    style={{marginLeft: 23}}

                    name="name"
                    inputProps={{
                        id: 'name-native-error',
                    }}
                >
                    <optgroup label="Author">
                        <option value="hai">1</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>
            </div>
            <div>

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
                           variant="filled" rows={10} defaultValue="ртймеш"  />
            </div>
        </div>
    );
};

export default ResultLool2;