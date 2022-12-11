interface ICoord {
    lon: number,
    lat: number
}

interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

interface IMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
}

interface IWind {
    speed: number,
    deg: number,
    gust: number
}

interface IClouds {
    all: number
}

interface ISys {
    pod: string
}

interface IList {
    dt: number;
    main: IMain;
    weather: IWeather[];
    clouds: IClouds;
    wind: IWind;
    visibility: number;
    pop: number;
    sys: ISys;
    dt_txt: string;
}

interface IDataCity {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface IWeatherData {
    cod: string,
    message: number,
    cnt: number,
    list: IList[];
    city: IDataCity
}

export interface ICity {
    id: number,
    cityName: string,
    slug: string
}



// const obj = {
//     cod: "200",
//     message: 0,
//     cnt: 40,
//     list: [
//         {
//             dt: 1670392800,
//             main: {
//                 temp: 268.73,
//                 feels_like: 266.54,
//                 temp_min: 268.73,
//                 temp_max: 269.41,
//                 pressure: 1034,
//                 sea_level: 1034,
//                 grnd_level: 1011,
//                 humidity: 37,
//                 temp_kf: -0.68
//             },
//             weather: [
//                 {
//                     id: 800,
//                     main: "Clear",
//                     description: "ясно",
//                     icon: "01d"
//                 }
//             ],
//             clouds: {
//                 all: 0
//             },
//             wind: {
//                 "speed": 1.4,
//                 "deg": 12,
//                 "gust": 1.26
//             },
//             visibility: 10000,
//             pop: 0,
//             sys: {
//                 pod: "d"
//             },
//             dt_txt: "2022-12-07 06:00:00"
//         },

//     ],
//     city: {
//         id: 1512440,
//         name: "Узбекистан",
//         coord: {
//             lat: 41.7075,
//             lon: 63.8491
//         },
//         country: "UZ",
//         population: 27865738,
//         timezone: 18000,
//         sunrise: 1670381876,
//         sunset: 1670415254
//     }
// }