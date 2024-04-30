/* eslint-disable */
import type { SelectOption } from './types';

export const products: SelectOption[] = [
    {
        key: 'accommodation',
        text: 'Accommodation',
        value: 'acco',
    },
    {
        key: 'eventsAndFestivals',
        text: `Events & Festivals`,
        value: 'even',
    },
    {
        key: 'foodAndDrink',
        text: `Food & Drink`,
        value: 'cate',
    },
    {
        key: 'thingsToDo',
        text: `Things to do`,
        value: 'acti,attr,reta',
    },
    {
        key: 'tours',
        text: `Tours`,
        value: 'tour',
    },
];

export const paths = {
    acco: 'accommodation',
    'acti,attr,reta': 'see-do',
    cate: 'food-drink',
    even: 'events',
    tour: 'tours',
};

export const monthsEnglish = [
    {
        label: 'January',
        value: 'january',
    },
    {
        label: 'February',
        value: 'february',
    },
    {
        label: 'March',
        value: 'march',
    },
    {
        label: 'April',
        value: 'april',
    },
    {
        label: 'May',
        value: 'may',
    },
    {
        label: 'June',
        value: 'june',
    },
    {
        label: 'July',
        value: 'july',
    },
    {
        label: 'August',
        value: 'august',
    },
    {
        label: 'September',
        value: 'september',
    },
    {
        label: 'October',
        value: 'october',
    },
    {
        label: 'November',
        value: 'november',
    },
    {
        label: 'December',
        value: 'december',
    },
];
