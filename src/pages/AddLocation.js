import AddLocationForm from "../components/AddLocationForm";
import CityEditList from "../components/CityEditList";

export default function AddLocation(props) {

    return (

        <div className="row">
            <div className="col-12 col-lg-1"></div>

            <AddLocationForm citysList={props.citysList} handleAddCity={props.handleAddCity} />

            <CityEditList citysList={props.citysList} handleDeleteCity={props.handleDeleteCity}/>

            <div className="col-12 col-lg-1"></div>
        </div>

    );
}


