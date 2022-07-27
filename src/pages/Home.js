import ShowForecastCity from "../components/ShowForecastCity.js";
import CityListShowForecast from "../components/CityListShowForecast.js";
import { useState } from "react";
import * as myConstants from '../data/ConstantData.js';
import '../App.css';

export default function ShowWeather(props) {
    
    const [selectedValue, setSelectedValue] = useState("");
    const [dataForecast, setDataForecast] = useState([]);
    const [imageSrc, setImageSrc] = useState(myConstants.DEFAULT_IMAGE);
    const [cityName, setcityName] = useState("");
    const [gifForLoading, setGifForLoading] = useState("");
    const [validData, setValidData] = useState(true);

    /**
     *  Function set data to state
     * @param {the event} e 
     */
    const handleChange = e => {
        setSelectedValue(e.target.value);
    }
    /**
     * handle onClick event of the button to get the forecast for the selected city 
     */
    function handleShowWeather() {
        try {
            //find city from list
            const city = props.citysList.find(city => city.cityName === selectedValue);
            if(city) {
                fetchWeather(city);
                console.log("1")
            }
        }
        catch (e){
            console.log("2")
            return
        }

    }

    /**
     * fetch weather data from 7timer server and set the data to state
     *  variables for display in the component ShowForecastCity 
     * @param {the city data for fetch} city 
     */
    function fetchWeather(city) {
        setGifForLoading("loadingBuffering");
        const url = `https://www.7timer.info/bin/api.pl?lon=${city.longitude}&lat=${city.latitude}&product=civillight&output=json`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setValidData(true);
                setDataForecast(data.dataseries);
                setcityName(city.cityName);
                const imageUrl = `https://www.7timer.info/bin/astro.php?%20lon=${city.longitude}&lat=${city.latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;
                setImageSrc(imageUrl);
                setGifForLoading("");
            })
            .catch(() => {
                setImageSrc(myConstants.PROBLEM_IMAGE);
                setValidData(false);
                setGifForLoading("");
            });
    }

    return (
        <>
            <div className={gifForLoading}></div>

            <div className="row">
                <div className="col-12 col-lg-1"></div>

                <ShowForecastCity validData={validData} cityName={cityName} dataForecast={dataForecast} imageSrc={imageSrc} />

                <CityListShowForecast handleShowWeather={handleShowWeather} handleChange={handleChange} citysList={props.citysList} />

                <div className="col-12 col-lg-1"></div>
            </div>
        </>
    );
}


