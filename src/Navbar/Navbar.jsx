import React, { Component } from "react";
import "materialize-css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div class="nav-wrapper red darken-3 z-depth-5">
          <a href="#" class="brand-logo center">
            {" "}
            Mon CV
          </a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            {/* <li><a href="top">Top</a></li> */}
            {/* <li><a href="contact">Contact</a></li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
