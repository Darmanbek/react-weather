import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../store/hooks';
import { data } from './data';
import "./statisticList.scss";

const StatisticList: React.FC = () => {
    const { mode } = useAppSelector(state => state.mode);
    const { weather } = useAppSelector(state => state.weather);

    console.log(weather);
    
    return (
        <div className={`statistic-list ${mode ? "light-block" : "dark-block"}`}>
            <ul className="list-items">
                {data.length > 0 && data.map(item => (
                    <li className={`list-item ${mode ? "light-list" : "dark-list"}`} key={item.id}>
                        <h2 className="item-title">{item.name}</h2>

                        <h3 className="item-time">{item.date}</h3>

                        <div className="item-icon">
                            <img src={item.icon} alt="weather" />
                        </div>

                        <div className="item-temp">
                            <h2>+<span>{item.tempBefore}</span>°</h2>
                            <h3>+<span>{item.tempAfter}</span>°</h3>
                        </div>

                        <div className="item-type">
                            <h3>{item.type}</h3>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default StatisticList;