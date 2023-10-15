import { BsArrowDownSquareFill } from "react-icons/bs";
import goti from "../../image/goti.jpg";
import bd from "../../image/bd.jpg";
import pak from "../../image/pak.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [ok, setOK] = useState(false);
  const [input, setInput] = useState();


  const handleClick = ()=>{

  }

  return (
    <>
      <div className="main_nav">
        <div className="container-fluid ">
          <div className="container ">
            <div className="d-flex align-items-center justify-content-between main">
              <div className="brand">
                <Link to='/'>
                <img src={goti} alt="gotibangla" />
                </Link>
              </div>

              <div className="last d-flex align-items-center">
                <div className="img">
                  <img src={bd} alt="bd" />
                </div>
                <div className="country d-flex align-items-center mx-2">
                  <span className="mx-2">BDT</span>
                  <span>
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <BsArrowDownSquareFill/>
                          
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="roww d-flex">
                              <div className="col mx-2" onClick={handleClick}>
                                <h6>Region</h6>
                                <div className="img d-flex s-con">
                                  <img src={bd} alt="bd" />
                                  <p>Bangladesh</p>
                                </div>
                                <div className="img d-flex">
                                  <img src={pak} alt="bd" />
                                  <p>Pakistan</p>
                                </div>
                                
                              </div>
                              <div className="line"></div>
                              <div className="col mx-2">
                                <h6>Currency</h6>
                                <p></p>
                              </div>
                            </div>
                            <button className="btn btn-warning ms-1">Apply</button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </span>
                </div>
                <div className="mx-2">
                  <div className="display">
                    <Link to='/account/singin' className="btn btn-primary">Signin</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
