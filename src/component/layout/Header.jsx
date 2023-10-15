import React from "react";
import { Link } from "react-router-dom";
import flight from "../../image/flight.avif";
import hotel from "../../image/hotel.jpg";
import tour from "../../image/tour.jpg";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
     <Navbar/>
      <header>
        <div className="main_header ">
          <div className="container main-container">
            <div className="uper d-flex p-2">
              <Link to="/flight">
                <div className="d-flex align-items-center ">
                  <div className="img">
                    <img src={flight} alt="" />
                  </div>
                  <h3>Flight</h3>
                </div>
              </Link>
              <Link to="/hotel">
                <div className="d-flex align-items-center">
                  <div className="img">
                    <img src={hotel} alt="" />
                  </div>
                  <h3>Hotel</h3>
                </div>
              </Link>
              <Link to="/tour">
                <div className="d-flex align-items-center ">
                  <div className="img">
                    <img src={tour} alt="" />
                  </div>
                  <h3>Tour</h3>
                </div>
              </Link>
            </div>
            <div className="middler col-md p-2 ">
              <div className="row">
                <div className="col-md-4 my-1 newcol">
                  <p>CITY/HOTEL/RESORT/AREA</p>
                  <p>Bangladesh</p>
                </div>
                <div className="col-md-4 my-1">
                  <div className="row">
                    <div className="col-sm-6 my-1 newcol">
                      <p>cehiod</p>
                    </div>
                    <div className="col-sm-6 my-1 newcol">
                      cdjiofd
                    </div>
                  </div>
                </div>
                <div className="col-md-4 my-1 newcol" >
                  sdfsfkldfjkl
                </div>
              </div>
            </div>
            <div className="search d-flex justify-content-center">
              <button to='/account/singin' className="btn btn-success">Search</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
