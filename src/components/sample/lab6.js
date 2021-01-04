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


const ResultLool4 = () => {


    return (
        <div>
            <TextField style={{width:700}} autoFocus id="standard-name"  multiline  defaultValue="1129 1263 1246 1263 1246 1229 1263 1246 1246"
                       variant="filled" rows={10} />

            <div>
                <Button size="small">
                    Виконати
                </Button>
            </div>
            <div>
                <div>
                    Декодований текст
                </div>
                <TextField style={{width:700}} autoFocus id="standard-name"  multiline
                           variant="filled" rows={10} defaultValue="asdsdasdd"  />
            </div>
        </div>
    );
};

export default ResultLool4;