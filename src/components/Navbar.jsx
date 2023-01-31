import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-xl-3">
            <Link to="/" className="navbar-brand d-flex justify-content-center">
              <img src={logo} alt="logo" height={50} width={50} />
            </Link>
          </div>
          <div className="col-md-8 col-xl-9">
            <nav className="navbar navbar-expand-lg white">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse ml-5"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex align-items-center justify-content-center ms-3">
                    <ul className="navbar-nav fs-3 d-flex gap-5">
                      <li className="nav-item">
                        <Link to="" className="violet text-decoration-none">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="" className="indigo text-decoration-none">
                          Gallery
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="" className="blue text-decoration-none">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="" className="green text-decoration-none">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="" className="orange text-decoration-none">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="" className="red text-decoration-none">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
