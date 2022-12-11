import { Sun, Rain, SmallRain, SmallRainSun, MainlyCloudy } from "../../../assets";

interface IData {
    id: number;
    name: string;
    date: string;
    icon: string;
    tempBefore: number;
    tempAfter: number;
    type: string;
};

const getDate = (day: number): string => {
    const date: Date = new Date();
    const num = date.getDate() + day;
    let month = "";
    switch (date.getMonth()+1) {
        case 1:  month = "январь";break;
        case 2:  month = "февраль";break;
        case 3:  month = "март";break;
        case 4:  month = "апрель";break;
        case 5:  month = "май";break;
        case 6:  month = "июнь";break;
        case 7:  month = "июль";break;
        case 8:  month = "август";break;
        case 9:  month = "сентябрь";break;
        case 10: month = "октябрь";break;
        case 11: month = "ноябрь";break;
        case 12: month = "декабрь";break;
        default: month = "неопределено";break;
    }

    return `${num} ${month}`;
}

export const data: IData[] = [
    {
        id: 0,
        name: "сегодня",
        date: getDate(0),
        icon: SmallRain,
        tempBefore: 32,
        tempAfter: 30,
        type: "дождь",
    },
    {
        id: 1,
        name: "завтра",
        date: getDate(1),
        icon: SmallRainSun,
        tempBefore: 32,
        tempAfter: 30,
        type: "дождь",
    },
    {
        id: 2,
        name: "пон",
        date: getDate(2),
        icon: SmallRain,
        tempBefore: 32,
        tempAfter: 30,
        type: "дождь",
    },
    {
        id: 3,
        name: "вт",
        date: getDate(3),
        icon: SmallRain,
        tempBefore: 32,
        tempAfter: 30,
        type: "дождь",
    },
    {
        id: 4,
        name: "ср",
        date: getDate(4),
        icon: SmallRain,
        tempBefore: 32,
        tempAfter: 30,
        type: "дождь",
    },
    {
        id: 5,
        name: "чт",
        date: getDate(5),
        icon: SmallRain,
        tempBefore: 32,
        tempAfter: 30,
        type: "дождь",
    },
    {
        id: 6,
        name: "пт",
        date: getDate(6),
        icon: SmallRain,
        tempBefore: 32,
        tempAfter: 30,
        type: "дождь",
    }
]