import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-wrapper sidebar-theme">
        <nav id="sidebar">
          <div className="shadow-bottom" />
          <ul className="list-unstyled menu-categories" id="accordionExample">
            <li className="menu">
              <a
                href="#dashboard"
                data-active="true"
                data-toggle="collapse"
                aria-expanded="true"
                className="dropdown-toggle"
              >
                <div>
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
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Dashboard</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
            </li>
            <li className="menu">
              <a
                href="#app"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div>
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
                    className="feather feather-cpu"
                  >
                    <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
                    <rect x={9} y={9} width={6} height={6} />
                    <line x1={9} y1={1} x2={9} y2={4} />
                    <line x1={15} y1={1} x2={15} y2={4} />
                    <line x1={9} y1={20} x2={9} y2={23} />
                    <line x1={15} y1={20} x2={15} y2={23} />
                    <line x1={20} y1={9} x2={23} y2={9} />
                    <line x1={20} y1={14} x2={23} y2={14} />
                    <line x1={1} y1={9} x2={4} y2={9} />
                    <line x1={1} y1={14} x2={4} y2={14} />
                  </svg>
                  <span>Apps</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
              <ul
                className="collapse submenu list-unstyled"
                id="app"
                data-parent="#accordionExample"
              >
                <li>
                  <a href="apps_chat.html"> Chat </a>
                </li>
              </ul>
            </li>
            <li className="menu">
              <a
                href="#components"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div>
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
                    className="feather feather-box"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1={12} y1="22.08" x2={12} y2={12} />
                  </svg>
                  <span>Components</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
              <ul
                className="collapse submenu list-unstyled"
                id="components"
                data-parent="#accordionExample"
              >
                <li>
                  <a href="component_tabs.html"> Tabs </a>
                </li>
              </ul>
            </li>
            <li className="menu">
              <a
                href="#elements"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div>
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
                    className="feather feather-zap"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <span>Elements</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
              <ul
                className="collapse submenu list-unstyled"
                id="elements"
                data-parent="#accordionExample"
              >
                <li>
                  <a href="element_alerts.html"> Alerts </a>
                </li>
              </ul>
            </li>

            <li className="menu">
              <a
                href="#users"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div>
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
                    className="feather feather-users"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Users</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
              <ul
                className="collapse submenu list-unstyled"
                id="users"
                data-parent="#accordionExample"
              >
                <li>
                  <NavLink to="/users/register"> Register User </NavLink>
                </li>
                <li>
                  <NavLink to="/users/list"> Users List </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu">
              <a
                href="#authentication"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div>
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
                    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Authentication</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
              <ul
                className="collapse submenu list-unstyled"
                id="authentication"
                data-parent="#accordionExample"
              >
                <li>
                  <a href="auth_login_boxed.html"> Login Boxed </a>
                </li>
                <li>
                  <a href="auth_register_boxed.html"> Register Boxed </a>
                </li>
                <li>
                  <a href="auth_lockscreen_boxed.html"> Unlock Boxed </a>
                </li>
                <li>
                  <a href="auth_pass_recovery_boxed.html"> Recover ID Boxed </a>
                </li>
                <li>
                  <a href="auth_login.html"> Login Cover </a>
                </li>
                <li>
                  <a href="auth_register.html"> Register Cover </a>
                </li>
                <li>
                  <a href="auth_lockscreen.html"> Unlock Cover </a>
                </li>
                <li>
                  <a href="auth_pass_recovery.html"> Recover ID Cover </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <div class="shadow-bottom"></div> */}
        </nav>
      </div>
    </>
  );
};

export default SideBar;
