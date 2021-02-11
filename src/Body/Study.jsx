import React, { Component } from "react";
import M from "materialize-css";

class Experience extends Component {
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
            <div class="collapsible-header">Bac S</div>
            <div class="collapsible-body">
              <span>
                <h5>Lycée La Roque | 2010</h5>
                <br />
                Obtention du Bac S avec option Biologie dans le lycée La roque,
                dans l'aveyron, entouré par les paturages et les décors de rêve!
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">CAP Boulanger</div>
            <div class="collapsible-body">
              <span>
                <h5>
                  Les compagnons du devoir et tu tour de france (Lyon) | 2014
                </h5>
                <br />
                Après une année en alternance à Lyon en tant qu'apprenti en
                alternance (A l'atelier de Dardilly), j’obtiens mon CAP en
                faisant face à un jury composé de plusieurs MOFs (Meilleur
                Ouvrier de France). Malgré la pression, je l'obtient haut la
                main.
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Développement</div>
            <div class="collapsible-body">
              <span>
                <h5>Ecole 42 | 2017-2020</h5>
                <br />
                Après une période de test d’un mois (La piscine) j'ai intégré
                l'école 42. Prônant l’autoformation j’y apprends, le C et
                l’infographie, en passant par le travail en équipe avec notament
                un grand projet de Raytracing. J'ai également pu pendant la
                formation, m'entrainer aux test unitaires et à l'utilisation de
                Git. Suite à mon stage en entreprise (De 6mois) qui à débouché
                sur un CDD, j'ai décidé de changer pour une école plus
                spécialisée dans le web.
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Experience;
