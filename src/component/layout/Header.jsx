import React, { useState } from "react";
import { Link } from "react-router-dom";
import flight from "../../image/flight.avif";
import hotel from "../../image/hotel.jpg";
import tour from "../../image/tour.jpg";
import Navbar from "./Navbar";

import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  const [ok, setOk] = useState(false);
  const [style, setStyle] = useState("col-md-4 my-1");

  const handelClick = () => {
    setOk(!ok);
    ok ? setStyle("col-md-4 my-1 newcol") : setStyle("col-md-4 my-1 down_down newcol");
  };

  return (
    <>
  
      <header>
        <div className="main_header ">
          <div className="container main-container">
            <div className="uper d-flex p-2 ">
              <Link to="/flight" className="nav-link">
                <div className="d-flex align-items-center container-media">
                  <div className="img">
                    <img src={flight} alt="" />
                  </div>
                  <h3 className="">Flight</h3>
                </div>
              </Link>
              <Link to="/hotel" className="nav-link">
                <div className="d-flex align-items-center container-media">
                  <div className="img">
                    <img src={hotel} alt="" />
                  </div>
                  <h3>Hotel</h3>
                </div>
              </Link>
              <Link to="/tour" className="nav-link">
                <div className="d-flex align-items-center container-media">
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
                  <div onClick={handelClick} >
                    <p>City/Hotel/Resturent/Area</p>
                    <h3>Cox's Bazar</h3>
                    <p>Bangladesh</p>
                  </div>
                  {ok ? (
                    <>
                      <div className="newcol_down w-100">
                        <div className="down_search  d-flex align-items-center">
                          <AiOutlineSearch className="fs-1 " />
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Type to SEarch"
                          />
                        </div>
                        <div className="down_place d-flex justify-content-between">
                          <div className="city">
                            <h5>Cox's Bazar</h5>
                            <p>Bangladesh</p>
                          </div>
                          <div className="destication">
                            <h5>city</h5>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                <div className={style}>
                  <div className="row gx-3">
                    <div className="col-sm mx-1 newcol ">
                    <div onClick={handelClick}>
                      <p>Check IN</p>
                      <h3>20 Oct's 2023</h3>
                      <p>2 Adults</p>
                    </div>
                    </div>
                    <div className="col-sm mx-1 newcol">
                    <div onClick={handelClick}>
                      <p>CheckOut</p>
                      <h3> 21 oct's 2023</h3>
                      <p>2 Adults</p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={style}>
                  <div className="row">
                    <div className="col ">
                    <div onClick={handelClick}>
                      <p>ROOMS & GUESTS</p>
                      <h3>1 <span>Room,</span> 2 <span>Guests</span> </h3>
                      <p>2 Adults</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search d-flex justify-content-center">
              <button to="/account/singin" className="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
