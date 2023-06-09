import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/employee">
                employee
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/aboutus">
                ABOUT US
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/store">
                Store
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/userreg">
                USER REG
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/stureg">
                student REG
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                API DEMO1
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/getquery">
              getquery
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                API DEMO2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
                API DEMO3
              </Link>
            </li>
            
            
            <li class="nav-item">
              <Link class="nav-link" to="/employeedetail/101">
                EMPLOYEE DETAIL
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
