import React from 'react';
import WeatherDay from './WeatherDay/WeatherDay';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import "./sectionWeather.scss";

const SectionWeather: React.FC = () => {
    return (
        <section className="section-weather">
            <div className="container">
                <div className="weather-inner">
                    <WeatherDay />
                    <WeatherInfo />
                </div>
            </div>
        </section>
    )
}

export default SectionWeather;