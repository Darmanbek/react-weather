import React from 'react';
import StatisticButtons from './StatisticButtons/StatisticButtons';
import StatisticList from './StatisticList/StatisticList';
import "./sectionStatistic.scss";

const SectionStatistic: React.FC = () => {
    return (
        <section className="section-statistic">
            <div className="container">
                <div className="statistic-inner">
                    <StatisticButtons />
                    <StatisticList />
                </div>
            </div>
        </section>
    )
}

export default SectionStatistic