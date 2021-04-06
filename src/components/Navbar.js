import React from 'react';

function Navbar(props) {
    return (
        <nav className="nav">
        <div className="left-div">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alg="logo"
          />
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input placeholder="Search" />
          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="avatar"
                />
                <sapn>John Doe</sapn>
              </li>
            </ul>
            <ul>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="avatar"
                />
                <sapn>John Doe</sapn>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              id="user-dp"
              alt="user-dp"
            />
            <span>John Doe</span>
          </div>
          <div className="nav-links">
          <ul>
            <li>Log in</li>
            <li>Log out</li>
            <li>Register</li>
          </ul>
        </div>
        </div>
       
      </nav>
    );
}

export default Navbar;