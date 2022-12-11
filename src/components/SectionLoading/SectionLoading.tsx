import React from 'react';
import { Sun } from "../../assets";
import { useAppSelector } from '../../store/hooks';
import "./sectionLoading.scss";

const SectionLoading: React.FC = () => {
    const { mode } = useAppSelector(state => state.mode);

    return (
        <div className="section-loading flex-center">
            <div className={`loading-block ${mode ? "light-block" : "dark-block"}`}>
                <img src={Sun} className="light" alt="loading..." />
            </div>
        </div>
    )
}

export default SectionLoading;