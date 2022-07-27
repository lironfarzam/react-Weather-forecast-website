

export default function ErrorMessage(props) {

    return (

        <div className="col-12 col-md-6 col-lg-5 mt-3 bg-prime" >
            <div className="card">
                <div className="card-body ">
                    <h3 className="p-2 mt-1 bg-dark text-white rounded">Opps...</h3>
                    <h5>There is no data for this city, please try another one</h5>
                    <img src={props.imageSrc} className="img-fluid mt-3 mb-3" width="100%" height="100%" alt="https://babysafeblog.co.il/wp-content/uploads/2021/04/%D7%A9%D7%9E%D7%A9-1024x576.jpg" />

                </div>
            </div>
        </div>

    );
}


