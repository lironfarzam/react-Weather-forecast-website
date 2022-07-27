import weatherIconMap from "../data/ManageWeatherIcons.js";

export default function ForecastTable(props) {

    let date = (day) => { return day.substring(6, 8) + "/" + day.substring(4, 6) + "/" + day.substring(0, 4) }

    return (
        <>
            <table className="table table-dark table-striped text-center">
                <thead >
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Weather</th>
                        <th scope="col">Icon</th>
                        <th scope="col">Temperature (max - min)</th>
                        <th scope="col">Wind</th>
                    </tr>

                    {props.dataForecast.map((day, index) => {
                        return (

                            <tr key={index}>
                                <th key={index.toString() + "date"}>{date(day.date.toString())}</th>
                                <td key={index.toString() + "weather"}>{weatherIconMap.get(day.weather) !== 'undefined' ? weatherIconMap.get(day.weather).name : "****"}</td>
                                <td key={index.toString() + "img"}> <img src={weatherIconMap.get(day.weather) !== 'undefined' ? weatherIconMap.get(day.weather).img : weatherIconMap.get("mixed").img} className="img-fluid" width="40%" height="40%" alt="" /></td>
                                <td key={index.toString() + "temp2m"}>{day.temp2m.max} &#8451; - {day.temp2m.min} &#8451;</td>
                                <td key={index.toString() + "wind10m"}>{day.wind10m_max <= 1 ? "no wind" : day.wind10m_max + "Km/h"}</td>
                            </tr>
                        )
                    })}

                </thead>
            </table>
        </>
    );
}


