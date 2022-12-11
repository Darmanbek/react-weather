import React, { useEffect, useState } from 'react';
import { Sun, MainlyCloudy, SmallRain, SmallRainSun, Rain, SmallCloudy, SmallCloudySun } from '../../../assets';
import { useAppSelector } from '../../../store/hooks';
import "./weatherDay.scss";

const WeatherDay: React.FC = () => {
    const { mode } = useAppSelector(state => state.mode);
    const { weather } = useAppSelector(state => state.weather);
    const { cityName } = useAppSelector(state => state.city);

    const [time, setTime] = useState<string>("00:00:00");
    
    const getIcon = (desc: string): any => {
        switch (desc) {
            case "ясно": return Sun; break;
            case "переменная облачность": return SmallRainSun; break;
            case "небольшая облачность": return SmallCloudy ;break;
            case "облачно с прояснениями": return SmallCloudySun ;break;
            case "пасмурно": return MainlyCloudy ;break;
            case "небольшой дождь": return SmallRain ;break;
            default: return Sun; break;
        }
    }

    const getTime = (): void => {
        const date = new Date();
        let hour: string | number = date.getHours();
        if(hour < 10){
            hour = `0${hour}`;
        }
        let min: string | number = date.getMinutes();
        if(min < 10){
            min = `0${min}`;
        }
        let sec: string | number = date.getSeconds();
        if(sec < 10){
            sec = `0${sec}`;
        }
        setTime(`${hour}:${min}:${sec}`);
    }

    useEffect(() => {
        getTime();
        let interval: ReturnType<typeof setInterval> = setInterval(getTime, 1000);
        return () => clearInterval(interval);
      }, []);
    return (
        <div className={`weather-day block ${mode ? "light-block" : "dark-block"}`}>
            <div className="weather-day-inner">
                <div className="day-temperature">

                    <div className="day-temperature_number">
                        <h1><span>{weather ? Math.round(weather.list[0].main.temp / 10) : 0}</span>°</h1>
                        <h2>Сегодня</h2>
                    </div>

                    <div className="day-temperature_img flex-center">
                        <img src={weather && getIcon(weather.list[0].weather[0].description)} alt="Weather icon" />
                    </div>

                </div>

                <div className="day-time">
                    <h2>Время: {time}</h2>
                    <h2>Город: {cityName ? cityName : "Город не выбран"}</h2>
                </div>
            </div>
        </div>
    )
}

export default React.memo(WeatherDay);