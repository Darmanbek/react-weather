import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../store/hooks'
import "./statisticButtons.scss";

const StatisticButtons: React.FC = () => {
    const { mode } = useAppSelector(state => state.mode);
    
    const [btnID, setBtnID] = useState<number>(0);
    
    const handleBtn = (id: number) => {
        setBtnID(id);
    }

    return (
        <div className="statistic-buttons">
            <div className="statistic-switch">
                <button className={`${mode ? "light-block" : "dark-block"} ${btnID === 1 && "active"}`} onClick={() => handleBtn(1)}>На неделю</button>

                <button className={`${mode ? "light-block" : "dark-block"} ${btnID === 2 && "active"}`} onClick={() => handleBtn(2)}>На месяц</button>

                <button className={`${mode ? "light-block" : "dark-block"} ${btnID === 3 && "active"}`} onClick={() => handleBtn(3)}>На 10 дней</button>
            </div>

            <div className="statistic-cancel">
                <button className={mode ? "light-block" : "dark-block"} onClick={() => handleBtn(0)}>Отменить</button>
            </div>
        </div>
    )
}

export default StatisticButtons;