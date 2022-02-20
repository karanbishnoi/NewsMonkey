import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/NewsMonkey">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                  <Link className="nav-link" aria-current="page" to="/NewsMonkey">Home</Link>
                              </li>
                              {/* <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li> */}
                              <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  News Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li><Link className="dropdown-item" to="/NewsMonkey/business">Business</Link></li>
                                  <li><Link className="dropdown-item" to="/NewsMonkey/entertainment">Entertainment</Link></li>
                                  <li><Link className="dropdown-item" to="/NewsMonkey/general">General</Link></li>
                                  <li><Link className="dropdown-item" to="/NewsMonkey/health">Health</Link></li>
                                  <li><Link className="dropdown-item" to="/NewsMonkey/science">Science</Link></li>
                                  <li><Link className="dropdown-item" to="/NewsMonkey/sports">Sports</Link></li>
                                  <li><Link className="dropdown-item" to="/NewsMonkey/technology">Technology</Link></li>
                                </ul>
                              </li>
                          </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default NavBar