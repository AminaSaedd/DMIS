import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Header = () => {
  return (
    <div className="header-container fixed-top">
      <header className="header navbar navbar-expand-sm">
        <ul className="navbar-item theme-brand flex-row  text-center">
          <li className="nav-item theme-logo">
            <a href="index.html">
              <img
                src="/assets/img/90x90.png"
                className="navbar-logo"
                alt="logo"
              />
            </a>
          </li>
          <li className="nav-item theme-text">
            <NavLink to="/" className="nav-link">
              {" "}
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-item flex-row ml-md-0 ml-auto">
          <li className="nav-item align-self-center search-animated">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search toggle-search"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
            <form className="form-inline search-full form-inline search">
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control search-form-control  ml-lg-auto"
                  placeholder="Search..."
                />
              </div>
            </form>
          </li>
        </ul>
        <ul className="navbar-item flex-row ml-md-auto">
          <li className="nav-item dropdown user-profile-dropdown">
            <a
              href="javascript:void(0);"
              className="nav-link dropdown-toggle user"
              id="userProfileDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              {/* <img src="assets/img/90x90.jpg" alt="avatar" /> */}
              <FiUser color="white" size="20" />
            </a>
            <div
              className="dropdown-menu position-absolute"
              aria-labelledby="userProfileDropdown"
            >
              <div className="dropdown-item">
                <NavLink to="/auth/logout">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1={21} y1={12} x2={9} y2={12} />
                  </svg>
                  Sign Out
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
