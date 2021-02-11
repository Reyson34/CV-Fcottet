import React, { Component } from "react";
import Photo from "../Images/Photo.png";
import M from "materialize-css";
import Infos from "./Info.jsx";
import Experiences from "./Experiences.jsx";
import Study from "./Study.jsx";
import Compétences from "./Compétences.jsx";
import "materialize-css";

class CuriculumVitae extends Component {
  state = {};

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelector(".tabs");
      var instance = M.Tabs.init(elems);
    });
  }

  render() {
    return (
      <body>
        <div class="container">
          <div class="row">
            <div class="col s6 push-s6">
              <span class="flow-text"></span>
              <div style={{ marginTop: 125, marginLeft: 50 }}>
                <p class="flow-text center">Bienvenue sur mon CV en ligne</p>
                <p
                  class="flow-text center"
                  style={{ fontSize: 10, marginTop: -30, color: "grey" }}
                >
                  (Actuellement en construction)
                </p>
                <p class="flow-text center">
                  Actuellement à la recherche d'une alternance pour intégrer
                  l'école WebForce3, vous trouverez ci-dessous mon parcours!
                </p>
              </div>
            </div>
            <div class="col s6 pull-s6">
              <span class="flow-text"></span>
              <div>
                <img
                  src={Photo}
                  alt=""
                  class="circle responsive-img"
                  style={{ width: 300, marginTop: 80, marginRight: 100 }}
                />
              </div>
            </div>
            <div class="row">
              <div class="col s12" style={{ marginTop: 80 }}>
                <ul class="tabs">
                  <li class="tab col s3 active">
                    <a href="#info">Mes infos</a>
                  </li>
                  <li class="tab col s3">
                    <a href="#exp">Expériences</a>
                  </li>
                  <li class="tab col s3">
                    <a href="#study">Etudes</a>
                  </li>
                  <li class="tab col s3">
                    <a href="#comp">Compétences</a>
                  </li>
                </ul>
              </div>
              <div id="info" class="col s12">
                <Infos />
              </div>
              <div id="exp" class="col s12">
                <Experiences />
              </div>
              <div id="study" class="col s12">
                <Study />
              </div>
              <div id="comp" class="col s12">
                <Compétences />
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default CuriculumVitae;
