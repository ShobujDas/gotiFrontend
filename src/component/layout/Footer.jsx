import React from "react";
import {RiFacebookCircleFill} from "react-icons/ri";
import {BsYoutube} from "react-icons/bs";
import {BiLogoInstagram} from "react-icons/bi";
import { Link } from "react-router-dom";
import bkash from "../../image/bkash.png";
import upay from "../../image/upay.png";
import master from "../../image/master.jpg";
import visa from "../../image/visa.jpg";
import nogod from "../../image/nogod.png";
import dbbl from "../../image/dbbl.jpg";
import goti from "../../image/goti.jpg";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row ">
            <div className="col-md-3">
              <div className="row">
                <h5>Discover</h5>
                <div className="col-sm-6 d-flex flex-column">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/terms" className="nav-link">Terms</Link>
                  <Link to="/talentAndCulture" className="nav-link">Talent & Culture</Link>
                </div>
                <div className="col-sm-6 d-flex flex-column">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/terms" className="nav-link">Terms</Link>
                  <Link to="/talentAndCulture" className="nav-link">Talent & Culture</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <h5>Payment Method</h5>
              <div className="d-flex">
                <div className="image">
                  <img src={bkash} alt="" />
                </div>
                <div className="image">
                  <img src={nogod} alt="" />
                </div>
                <div className="image">
                  <img src={upay} alt="" />
                </div>
                <div className="image">
                  <img src={master} alt="" />
                </div>
                <div className="image">
                  <img src={visa} alt="" />
                </div>
                <div className="image">
                  <img src={dbbl} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <h5>Need Help?</h5>
              <p>
                We are Always here for you! Knock us on Messenger anytime or
                Call our Hotline (10AM - 10PM).
              </p>
            </div>
            <div className="col-md-3 mt-4">
              <h5>Contact</h5>
              <p>info@gotibangla.com</p>
              <p>+88017144267</p>
              <div className="icons">
                <RiFacebookCircleFill />
                <BsYoutube className="mx-2"/>
                <BiLogoInstagram/>
              </div>
            </div>
          </div>
          <div className="line-hori mt-2"></div>
          <div className="d-flex justify-content-between py-3">
            
                <div className="brand">
                    <img src={goti} alt="" />
                </div>
                <p>&copy; Copyright GotiBangla Ltd.</p>
            </div>
          
        </div>
      </footer>
    </>
  );
}

export default Footer;
