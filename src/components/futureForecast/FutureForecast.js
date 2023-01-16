import React from "react";
import { WeatherCode } from "../../constants/WeatherCode";
import style from "./FutureForecast.module.css";

const FutureForecast = (props) => {

    const { weatherData } = props;

    const RenderFutureForecast = () => {
        const { daily } = weatherData;
        const { temperature_2m_max, temperature_2m_min, weathercode, time } = daily;
        let futureForecast = [];
        for (let index = 0; index < 7; index++) {
            const date = new Date(time[index]);
            if (index == 0) {
                futureForecast.push(
                    <div className={`${style.futureForecastItem}`} key={index}>
                        <p className={`${style.day}`}>
                            Today
                        </p>
                        <img src={`http://openweathermap.org/img/wn/${WeatherCode[weathercode[index]]}d@2x.png`} alt="weather icon" />
                        <p className={`${style.day}`}>
                            <span>
                                {
                                    temperature_2m_min[index]
                                }°C
                            </span> - <span>
                                {
                                    temperature_2m_max[index]
                                }°C
                            </span>
                        </p>
                    </div>
                )
            }
            else {
                futureForecast.push(
                    <div className={`${style.futureForecastItem}`} key={index}>
                        <p className={`${style.day}`}>
                            {
                                date.toLocaleString('en-US', {
                                    weekday: 'long',
                                })
                            }
                        </p>
                        <img src={`http://openweathermap.org/img/wn/${WeatherCode[weathercode[index]]}d@2x.png`} alt="weather icon" />
                        <p className={`${style.day}`}>
                            <span>
                                {
                                    temperature_2m_min[index]
                                }°C
                            </span> - <span>
                                {
                                    temperature_2m_max[index]
                                }°C
                            </span>
                        </p>
                    </div>
                )
            }
        }
        return futureForecast;
    }

    return (
        <div className={`${style.futureForecast}`}>
            {
                Object.keys(weatherData).length !== 0 ? <RenderFutureForecast /> : null
            }
        </div>
    )
}

export default FutureForecast;