import { Outlet, Link } from "react-router-dom";
import '../App.css';

export default function Menu() {

  //function to make map of images from reacou
  return (
    <>
      <div id="weatherBanner" className="jumbotron bg-cover">
        <div className="py-5">
          <h1 className="display-4 font-weight-bold">Weather</h1>
          <p className="font-italic mb-2">Weather forecast for next week</p>
        </div>
      </div>
      <nav>
        <div className="nav nav-tabs " id="nav-tab" role="tablist">
          <Link to="/" className="nav-link link">Home</Link> {" "}
          <Link to="/AddLocation" className="nav-link link">AddLocation</Link>
        </div>
      </nav>
      
      <Outlet />
    </>
  );
}


