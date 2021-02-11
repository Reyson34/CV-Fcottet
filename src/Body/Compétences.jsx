import React, { Component } from "react";
import M from "materialize-css";
import react from "../Images/favicon.ico";
import redux from "../Images/redux.png";
import c from "../Images/C-language.png";
import Git from "../Images/Git.png";
import gimp from "../Images/gimp.png";
import electron from "../Images/electron.png";
import docker from "../Images/docker.png";
import css from "../Images/css.png";

class Compétences extends Component {
  state = {};

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems);
    });
  }

  render() {
    return (
      <div>
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">Développement</div>
            <div class="collapsible-body">
              <span>
                <div class="left">
                  <img
                    class="responsive-img"
                    style={{ height: 50 }}
                    src={react}
                  />
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                </div>
                <div class="center">
                  <img
                    class="responsive-img"
                    style={{ height: 50 }}
                    src={redux}
                  />
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                </div>
                <div class="left">
                  <img class="responsive-img" style={{ height: 50 }} src={c} />
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                </div>
                <div class="center">
                  <img
                    class="responsive-img"
                    style={{ height: 50 }}
                    src={Git}
                  />
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                  <i class="material-icons">star_half</i>
                </div>
                <div class="left">
                  <img
                    class="responsive-img"
                    style={{ height: 50 }}
                    src={docker}
                  />
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                  <i class="material-icons">star_half</i>
                </div>
                <div class="center">
                  <img
                    class="responsive-img"
                    style={{ height: 50 }}
                    src={gimp}
                  />
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                  <i class="material-icons">star_border</i>
                </div>
                {/* <div class="left">
                  <img
                    class="responsive-img"
                    style={{ height: 50 }}
                    src={css}
                  />
                  <i class="material-icons">star</i>
                  <i class="material-icons">star</i>
                  <i class="material-icons">star_border</i>
                </div>
                <div class="center">
                  <img
                    class="responsive-img"
                    style={{ height: 50 }}
                    src={electron}
                  />
                  <i class="material-icons">star</i>
                  <i class="material-icons">star_half</i>
                  <i class="material-icons">star_border</i>
                </div> */}
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Langues vivantes</div>
            <div class="collapsible-body">
              <span>
                Français: Langue Natale
                <br />
                Anglais: Très bon niveau (Peu de pratique a l'oral)
                <br />
                Espagnol: Niveau moyen
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Compétences;
