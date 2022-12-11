import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { handleCity } from '../../../store/citySlice/citySlice';
import { handleMode } from '../../../store/modeSlice/modeSlice';
import { Vector } from "../../../assets"
import { ICity } from '../../../types';
import { dataCity } from './dataCity';
import "./headerButton.scss";

const HeaderButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const { cityName } = useAppSelector(state => state.city);
    const { mode } = useAppSelector(state => state.mode);
    
    const listRef = useRef<HTMLHeadingElement>(null);
    const [showCityes, setShowCityes] = useState<boolean>(false);

    const toggleMode = () => {
        dispatch(handleMode());
    }

    const handleButton = () => {
        setShowCityes(prev => !prev);
    }

    const selectItem = (item: ICity) => {
        dispatch(handleCity(item));
        setShowCityes(false);
    }

    useEffect(() => {
        document.addEventListener('click', (e: MouseEvent) => {
            const { current } = listRef;
            if(!e.composedPath().includes(current as HTMLElement)){
                setShowCityes(false);
            }
        })
    }, [listRef])
    return (
        <div className="header-content">
            <div className="header-toggle_button">
                <button onClick={toggleMode}>
                    <Vector />
                </button>
            </div>

            <div ref={listRef} className="header-select_city">
                <button onClick={handleButton} className={`flex-center ${mode ? "light-list" : "dark-block"}`}>
                    <span>{cityName}</span>
                    <FaChevronDown className={showCityes ? "icon active" : "icon"} />
                </button>

                <ul className={`city-items ${showCityes && `active`} ${mode ? "light-list" : "dark-block"}`}>
                    {dataCity.length > 0 && dataCity.map(item => (
                        <li className="city-item" key={item.id} onClick={() => selectItem(item)}>
                            {item.cityName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HeaderButton