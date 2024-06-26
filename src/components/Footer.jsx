import { faFacebook, faLinkedin,faTwitter,faInstagram,} from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="row w-100 mt-5 p-3">
      <div className="col-md-4 p-4 ms-md-5">
        <h4 className="text-warning">
          <FontAwesomeIcon icon={faVideo} className="me-3 text-warning" beat />
          Media Player
        </h4>

        <p style={{ textAlign: "justify" }} className="mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          placeat numquam molestias minus eos error omnis nobis similique?
          Ratione similique quam enim deserunt placeat natus amet quidem quis
          asperiores odit.
        </p>
      </div>
      <div className="col-md-2 p-4 justify-content-center d-md-flex">
        <div>
          <h4>Links</h4>
          <p className="mt-4">
          
            <Link to={'/'}>Landing Page</Link>
          </p>
          <p>
            <Link to={'/home'}> Home page </Link>
          </p>
          <p>
            
            <Link to={'/watch-history'}> Watch History </Link>
          </p>
        </div>
      </div>

      <div className="col-md-2 p-4">
        <h4>Guides</h4>
        <p className="mt-4">React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>

      <div className="col-md-3 p-4">
        <h4>Contact Us</h4>
        <div className="d-flex mt-4">
          <input type="text" className="form-control" placeholder="Email id" />
          <button className="btn btn-warning ms-3">Subscribe</button>
        </div>
        <div className="d-flex mt-4 justify-content-between">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default Footer;
