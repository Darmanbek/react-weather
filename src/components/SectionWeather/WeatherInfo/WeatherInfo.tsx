import React, { useEffect, useState } from 'react'
import { Oblako } from '../../../assets';
import { useAppSelector } from '../../../store/hooks';
import { Temp, Pres, Prec, Wind } from "../../../assets";
import "./weatherInfo.scss";

const WeatherInfo: React.FC = () => {
    const { mode } = useAppSelector(state => state.mode);
    const { weather } = useAppSelector(state => state.weather);

    return (
        <div className={`weather-info block ${mode ? "light-block" : "dark-block"}`}>

            <ul className="info-items">

                <li className="info-item">
                    <div className="info-icon flex-center">
                        <img src={Temp} alt="info-icon" />
                    </div>
                    <h2 className="info-title">Температура</h2>
                    <h3 className="info-param">{weather ? Math.ceil(weather.list[0].main.temp_max / 10) : 0}° - ощущается как {weather ? Math.floor(weather.list[0].main.feels_like / 10) : "0"}°</h3>
                </li>
                <li className="info-item">
                    <div className="info-icon flex-center">
                        <img src={Pres} alt="info-icon" />
                    </div>
                    <h2 className="info-title">Давление</h2>
                    <h3 className="info-param">{weather ? weather.list[0].main.grnd_level : 0} мм ртутного столба - нормальное</h3>
                </li>
                <li className="info-item">
                    <div className="info-icon flex-center">
                        <img src={Prec} alt="info-icon" />
                    </div>
                    <h2 className="info-title">Осадки</h2>
                    <h3 className="info-param">Без осадков</h3>
                </li>
                <li className="info-item">
                    <div className="info-icon flex-center">
                        <img src={Wind} alt="info-icon" />
                    </div>
                    <h2 className="info-title">Ветер</h2>
                    <h3 className="info-param">{3} м/с юго-запад - легкий ветер</h3>
                </li>

            </ul>
            
            <div className="info-image">
                <img src={Oblako} alt="oblako image" />
            </div>

        </div>
    )
}

export default WeatherInfo;