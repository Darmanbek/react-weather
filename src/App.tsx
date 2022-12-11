import React, { useEffect } from 'react';
import { Header, SectionLoading, SectionStatistic, SectionWeather } from './components';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getWeather } from './store/weatherSlice/weatherSlice';
import "./styles/app.scss";

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const { mode } = useAppSelector(state => state.mode);
    const { weather, loading } = useAppSelector(state => state.weather);
    const dataCity = useAppSelector(state => state.city);

    console.log(weather);
    
    
    useEffect(() => {
        if (dataCity) {
            dispatch(getWeather(dataCity));
        }
    }, [dispatch, dataCity]);

    useEffect(() => {
        if (mode) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }
    }, [mode]);

    useEffect(() => {
        localStorage.setItem("mode", `${mode}`)
        return () => {
            localStorage.setItem("mode", `${mode}`)
        }
    }, [mode]);

    if(loading === "pending") return <SectionLoading />
    
    return (
        <div className="app">
            <Header />
            <SectionWeather />
            <SectionStatistic />
        </div>
    )
}

export default App;