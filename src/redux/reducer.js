import {createDraftSafeSelector} from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const SAVE_COUNT_OF_LESSONS = 'SAVE_COUNT_OF_LESSONS';
const SAVE_COUNT_OF_MSG = 'SAVE_COUNT_OF_MSG';
const SAVE_COUNT_OF_TASKS = 'SAVE_COUNT_OF_TASKS';
const SAVE_COUNT_OF_LENDS = 'SAVE_COUNT_OF_LENDS';
const SAVE_COUNT_OF_FRIENDS = 'SAVE_COUNT_OF_FRIENDS';
const SAVE_MARK_OF_DIPLOMA = 'SAVE_MARK_OF_DIPLOMA';
const SAVE_GOAL_EDUCATION = 'SAVE_GOAL_EDUCATION';

let initialState = {
    lessonsPassedCount: 300,
    countOfMsg: 234,
    countOfTasks: 50,
    countOfLends: 33,
    countOfFriends: 3,
    mark: 2,
    goal: "Эти цепи на мне, эту суку так манит\n" +
        "Закаменел, будто каменный камень\n" +
        "Нахуй игру, т. к. мы не играем\n" +
        "Заберу всё, будто бы я татарин"

}
const formReducerStepper = ( state = initialState, action) => {
    switch (action.type) {

        case SAVE_COUNT_OF_LESSONS:
            return {
                lessonsPassedCount: action.count
            }

        case SAVE_COUNT_OF_MSG:
            return {
                ...state,
                countOfMsg: action.count
            }
        case SAVE_COUNT_OF_TASKS:
            return {
                ...state,
                countOfTasks: action.count
            }
        case SAVE_COUNT_OF_LENDS:
            return {
                ...state,
                countOfLends: action.count
            }
        case SAVE_COUNT_OF_FRIENDS:
            return {
                ...state,
                countOfFriends: action.count
            }
        case SAVE_MARK_OF_DIPLOMA:
            return {
                ...state,
                mark: action.count
            }
        case SAVE_GOAL_EDUCATION:
            return {
                ...state,
                goal: action.count
            }

        default:
            return state
    }
}

export let saveCountLessons = (count) => {
    return {
        type: SAVE_COUNT_OF_LESSONS,
        count
    }
}

export let saveCountMsg = (count) => {
    return {
        type: SAVE_COUNT_OF_MSG,
        count
    }
}

export let saveCountOfTasks = (count) => {
    return {
        type: SAVE_COUNT_OF_TASKS,
        count
    }
}

export let saveCountOfLends = (count) => {
    return {
        type: SAVE_COUNT_OF_LENDS,
        count
    }
}

export let saveCountOfFriends = (count) => {
    return {
        type: SAVE_COUNT_OF_FRIENDS,
        count
    }
}

export let saveMarkOfDiploma = (count) => {
    return {
        type: SAVE_MARK_OF_DIPLOMA,
        count
    }
}

export let saveSetGoalEducation = (count) => {
    return {
        type: SAVE_GOAL_EDUCATION,
        count
    }
}


const selectSelf = (state) => state.stepper

export const draftSafeSelector = createDraftSafeSelector(
    selectSelf,
    state => state
)


export default formReducerStepper;