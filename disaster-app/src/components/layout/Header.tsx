import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container fixed-top">
        <header className="header navbar navbar-expand-sm">
          <ul className="navbar-item theme-brand flex-row  text-center">
            <li className="nav-item theme-logo">
              <a href="index.html">
                <img
                  src="assets/img/cuslogo.jpg"
                  className="navbar-logo"
                  alt="logo"
                />
              </a>
            </li>
            <li className="nav-item theme-text">
              <a href="index.html" className="nav-link">
                {" "}
                Ticket Management System{" "}
              </a>
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
              <form
                className="form-inline search-full form-inline search"
                role="search"
              >
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
                <img src="assets/img/cuslogo.jpg" alt="avatar" />
              </a>
              <div
                className="dropdown-menu position-absolute"
                aria-labelledby="userProfileDropdown"
              >
                <div>
                  <div className="dropdown-item">
                    <a href="user_profile.html">
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
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>{" "}
                      My Profile
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a href="apps_mailbox.html">
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
                        className="feather feather-inbox"
                      >
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                      </svg>{" "}
                      Inbox
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a href="auth_lockscreen.html">
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
                        className="feather feather-lock"
                      >
                        <rect
                          x={3}
                          y={11}
                          width={18}
                          height={11}
                          rx={2}
                          ry={2}
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>{" "}
                      Lock Screen
                    </a>
                  </div>
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
              </div>
            </li>
          </ul>
        </header>
      </div>
      <div className="sub-header-container">
        <header className="header navbar navbar-expand-sm">
          <a
            href="javascript:void(0);"
            className="sidebarCollapse"
            data-placement="bottom"
          >
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
              className="feather feather-menu"
            >
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </a>
          <ul className="navbar-nav flex-row">
            <li>
              <div className="page-header">
                <nav className="breadcrumb-one" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
