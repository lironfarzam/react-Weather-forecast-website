export default function CustomInput(props) {

    return (
        <>
            <label htmlFor={props.inputName}>{props.inputName}: </label>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="material-icons">{props.iconGoogleText}</span>
                    </span>
                </div>
                <input type="text" className="form-control" value={props.value} id={props.inputName} name={props.inputName} onChange={(c) => props.stateInputFunc(c.target.value)}
                    placeholder={props.inputName} />
            </div>
            <div className={props.isValidInput[0] ? "text-success" : "text-danger"}> {props.isValidInput[1]} </div>

        </>
    );
}


