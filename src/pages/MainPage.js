import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrentInfo from "../components/currentInfo/CurrentInfo";
import FutureForecast from "../components/futureForecast/FutureForecast";
import style from "./MainPage.module.css";

const MainPage = () => {
    const [date, setDate] = useState(new Date());
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000000);
        const loadData = async () => {
            try {
                const {data} = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-6.18&longitude=106.82&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Asia%2FBangkok');
                setWeatherData(data);
                console.log(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        loadData();
    }, []);

    return (
        <div style={{ overflowX: "hidden" }}>
            <CurrentInfo 
                date={date}
                weatherData={weatherData}
            />

            <FutureForecast 
                weatherData={weatherData}
            />
        </div>
    )
}

export default MainPage;