import { useState, useEffect } from "react";
import CustomInput from "./CustomInput.js";

export default function AddLocationForm(props) {
    const [cityNameInput, setCityName] = useState("");
    const [isValidCity, setIsValidCity] = useState([false, ""]);

    const [latitudeInput, setLatitude] = useState("");
    const [isValidLatitude, setIsValidLatitude] = useState([false, ""]);

    const [longitudeInput, setLongitude] = useState("");
    const [isValidLongitude, setIsValidLongitude] = useState([false, ""]);

    /**
     * @description - This function is used to validate the city name input.
     * @param {input object} input 
     * @param {the name of the input} inputName 
     * @returns 
     */
    function isNotEmptyInput(input, inputName) {
        if (input === "")
            return ([false, `${inputName} is required`]);
        else
            return ([true, `Valid input`]);
    }
    /**
     * Function to add city to the list
     * @param {city name input} cityNameInput 
     * @param {latitude input} latitudeInput 
     * @param {longitude input} longitudeInput 
     */
    function addLocation(cityNameInput, latitudeInput, longitudeInput) {
        props.handleAddCity({ cityName: cityNameInput, latitude: latitudeInput, longitude: longitudeInput });
    }
    /**
     * Function to validate the city name input
     * check if the input is not empty
     * check if the input is already in the list
     * @param {input object} input 
     * @param {the name of the input} inputName 
     * @returns 
     */
    function isValidCityNameInput(input, inputName) {
        //check if input is empty if so return false and error message
        let isEmpty = isNotEmptyInput(input, inputName);
        if (!isEmpty[0])
            return isEmpty;
        //check if city name is exist in the list if so return false and error message
        else if (props.citysList.find(city => city.cityName === input))
            return ([false, `${input} is already exist`]);
        else
            return ([true, `Valid input`]);
    }

    /**
     * Function to valid if the input of the cordinate lines are valid
     * @param {input object} input 
     * @param {min range of input} min 
     * @param {max range of input} max 
     * @param {the name of the input} inputName 
     * @returns 
     */
    function isValidCordinateLine(input, min, max, inputName) {

        let isEmpty = isNotEmptyInput(input, inputName);

        if (!isEmpty[0])
            return isEmpty;
        //check if input contain only numbers and is between min and max
        else if (!/^-?\d+\.?\d*$/.test(input))
            return ([false, `Value must be decimal number: only digits, a signle minus and a single dot are allowed`]);
        else if (input < min || input > max)
            return ([false, `Value must be decimal between ${min} and ${max}`]);
        else
            return ([true, "Valid input"]);
    }

    /**
     * function to validate the fields of the form and set state for the error messages
     */
    function validateInputForm() {
        if (cityNameInput || isValidCity[1] !== "")
            setIsValidCity(isValidCityNameInput(cityNameInput.trim(), "City name"));

        if (latitudeInput || isValidLatitude[1] !== "")
            setIsValidLatitude(isValidCordinateLine(latitudeInput.trim(), -90.0, 90.0, "Latitude"));

        if (longitudeInput || isValidLongitude[1] !== "") {
            setIsValidLongitude(isValidCordinateLine(longitudeInput.trim(), -180.0, 180.0, "Longitude"));
        }
    }
    /**
     *  handle onClick event of the button to add the city to the list
     * @param {event object} e 
     */
    function handleSubmitButton(e) {
        e.preventDefault();
        if (isValidCity[0] && isValidLatitude[0] && isValidLongitude[0]) {
            addLocation(cityNameInput, latitudeInput, longitudeInput);
            resetInputForm();
        }

    }
    /**
     * reset input form
     */
    function resetInputForm() {
        setCityName("");
        setLatitude("");
        setLongitude("");
        setIsValidCity([false, ""]);
        setIsValidLatitude([false, ""]);
        setIsValidLongitude([false, ""]);
    }
    
    /**
     * @description - This function is used to valid the value of the input field to the value of the form
     */
    useEffect(() => {
        validateInputForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityNameInput, latitudeInput, longitudeInput]); 

    
    return (
        <>
            {/* ------Left Card--------- */}
            <div className="col-12 col-md-6 col-lg-5 mt-3">
                <div className="card ">
                    <div className="card-body ">
                        <div className="text-center">
                            <h3 className="p-2 mt-1 bg-dark text-white rounded">Add location:</h3>
                        </div>
                        <form onSubmit={handleSubmitButton} >

                            <CustomInput inputName={"City name"} iconGoogleText={"location_city"} value={cityNameInput} isValidInput={isValidCity} stateInputFunc={setCityName} />

                            <CustomInput inputName={"Latitude"} iconGoogleText={"swap_vert"} value={latitudeInput} isValidInput={isValidLatitude} stateInputFunc={setLatitude} />

                            <CustomInput inputName={"Longitude"} iconGoogleText={"swap_horiz"} value={longitudeInput} isValidInput={isValidLongitude} stateInputFunc={setLongitude} />

                            <button type="submit" className="btn btn-secondary mt-3">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


