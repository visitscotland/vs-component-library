/* eslint-disable */
import type { SelectOption } from "./types";

export const products: SelectOption[] = [
    {
        key: 'accommodation',
        displayName: 'Accommodation',
        optionValue: 'acco',
    },
    {
        key: 'eventsAndFestivals',
        displayName: `Events & Festivals`,
        optionValue: 'even',
    },
    {
        key: 'foodAndDrink',
        displayName: `Food & Drink`,
        optionValue: 'cate',
    },
    {
        key: 'thingsToDo',
        displayName: `Things to do`,
        optionValue: 'acti,attr,reta'
    },
    {
        key: 'tours',
        displayName: `Tours`,
        optionValue: 'tour'
    }
];

export const paths = {
    'acco': 'accommodation',
    'acti,attr,reta': 'see-do',
    'cate': 'food-drink',
    'even': 'events',
    'tour': 'tours'
}

export const baseUrl = {
    dev: 'http://172.28.81.65:8089',
    prod: 'https://www.visitscotland.com'
}

export const monthsEnglish = [
        {
            "label": "January",
            "value": "january"
        },
        {
            "label": "February",
            "value": "february"
        },
        {
            "label": "March",
            "value": "march"
        },
        {
            "label": "April",
            "value": "april"
        },
        {
            "label": "May",
            "value": "may"
        },
        {
            "label": "June",
            "value": "june"
        },
        {
            "label": "July",
            "value": "july"
        },
        {
            "label": "August",
            "value": "august"
        },
        {
            "label": "September",
            "value": "september"
        },
        {
            "label": "October",
            "value": "october"
        },
        {
            "label": "November",
            "value": "november"
        },
        {
            "label": "December",
            "value": "december"
        }
    ]
