import ErrorMessage from "../components/ErrorMessage";
import ForecastCard from "../components/ForecastCard";


export default function ShowForecastCity(props) {
    return (
        <>
            {props.validData ?
                <ForecastCard cityName={props.cityName} dataForecast={props.dataForecast} imageSrc={props.imageSrc} />
                :
                <ErrorMessage imageSrc={props.imageSrc} />
            }
        </>
    );
}


