export default function CityEditList(props) {

    return (
        <>
            <div className="col-12 col-lg-5 mt-3" >
                <div className="card ">
                    <div className="card-body ">
                        <div className="text-center">
                            <h3 className="p-2 mt-1 bg-dark text-white rounded">Locations</h3>
                        </div>
                        {props.citysList.map((city, index) => (
                            <div key={index} className="card mt-2">
                                <div className="card-header " style={{ display: "flex" }}>
                                    <h6><b>{city.cityName}</b></h6>
                                    <button type="button" className="trash btn btn-sm btn-outline-danger material-icons"
                                        style={{ marginLeft: "auto" }} onClick={() => props.handleDeleteCity(city)}>delete_forever</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}


