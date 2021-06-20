import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="bg">
      <div className="header">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img src="images/prime.png" className="App-logo" alt="logo" />
            <div className="navs">
              <div className="d-flex align-items-center">
                <h4
                  className="light-white nav-item"
                  style={{
                    color: "#fff",
                    borderBottom: "1px solid #fff",
                    fontWeight: "bolder",
                  }}
                >
                  Home
                </h4>
                <h4 className="light-white nav-item">TV Shows</h4>
                <h4 className="light-white nav-item">Movies</h4>
                <h4 className="light-white nav-item">Kids</h4>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <input type="text" className="search-box" placeholder="Search" />
            <img src="images/adult-1.png" className="avatar" alt="logo" />
            <p className="avatar-name">Ammar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
