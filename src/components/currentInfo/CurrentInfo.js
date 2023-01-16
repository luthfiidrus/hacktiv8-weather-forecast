import React from "react";
import style from "./CurrentInfo.module.css";

const CurrentInfo = (props) => {

    const { date, weatherData } = props;
    const windspeed = Object.keys(weatherData).length !== 0 ? weatherData.daily.windspeed_10m_max[0] : 0;
    const sunrise = Object.keys(weatherData).length !== 0 ? new Date(weatherData.daily.sunrise[0]) : "-";
    const sunset = Object.keys(weatherData).length !== 0 ? new Date(weatherData.daily.sunset[0]) : "-";

    return (
        <div className={`${style.currentInfo}`}>
            <div className={`${style.dateContainer}`}>
                <div className={`${style.time}`}>
                    <div>
                        {
                            date.toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })
                        }
                    </div>
                </div>
                <div className={`${style.date}`}>
                    <div>
                        {
                            date.toLocaleString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                            })
                        }
                    </div>
                </div>
                <div className={`${style.others}`}>
                    {/* <div className={`${style.weatherItem}`}>
                        <div>Humidity</div>
                        <div>10</div>
                    </div>
                    <div className={`${style.weatherItem}`}>
                        <div>Pressure</div>
                        <div>12</div>
                    </div> */}
                    <div className={`${style.weatherItem}`}>
                        <div>Wind Speed</div>
                        <div>
                            {
                                windspeed
                            } km/h
                        </div>
                    </div>
                    <div className={`${style.weatherItem}`}>
                        <div>Sunrise</div>
                        <div>
                            {
                                sunrise == "-" ? "-" :
                                sunrise.toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true,
                                    })
                            }
                        </div>
                    </div>
                    <div className={`${style.weatherItem}`}>
                        <div>Sunset</div>
                        <div>
                            {
                                sunset == "-" ? "-" :
                                sunset.toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true,
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.placeContainer}`}>
                <div className={`${style.timeZone}`}>{weatherData.timezone}</div>
                <div className={`${style.country}`}>IDN (GMT{weatherData.timezone_abbreviation})</div>
            </div>
        </div>
    )
}

export default CurrentInfo;