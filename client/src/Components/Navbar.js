import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <strong>Ecommerce</strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
