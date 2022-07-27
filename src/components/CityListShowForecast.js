export default function CityListShowForecast(props) {

    const listItems = props.citysList.map((city, index) => {
        return <option key={index} value={city.cityName}>{city.cityName}</option>
    });
    return (
        <>
            {/* ------Right Card--------- */}
            <div className="col-12 col-lg-5">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="text-center">
                            <h3 className="p-2 bg-dark text-white rounded">Locations</h3>
                        </div>
                        <select className="form-select" multiple aria-label="multiple select example" size={props.citysList.length < 6 ? props.citysList.length : 6} style={{ fontSize: '20px' }}
                            onChange={props.handleChange}>
                            {listItems}
                        </select>
                        <button className="btn btn-secondary mt-3" onClick={props.handleShowWeather}>Show forecast</button>
                    </div>
                </div>
            </div>
        </>
    );
}


