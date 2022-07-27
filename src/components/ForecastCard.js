import * as myConstants from '../data/ConstantData.js';
import ForecastTable from "../components/ForecastTable";

export default function ForecastCard(props) {
    return (
        <>
            <div className="col-12 col-lg-5 mt-3">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <h3 className="p-2 bg-dark text-white rounded">Forecast: {props.cityName}</h3>
                        </div>
                        <br />

                        {props.dataForecast.length > 0 && <ForecastTable dataForecast={props.dataForecast} />}

                        <div className="text-center">
                            <img src={props.imageSrc} className="img-fluid mb-3" width="100%" height="100%" alt={myConstants.DEFAULT_IMAGE} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


