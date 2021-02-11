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
            <div class="collapsible-header">Apprenti Boulanger</div>
            <div class="collapsible-body">
              <span>
                <h5> L’atelier de Dardilly | 2014-2015 </h5>
                Une alternance qui à durée un peu plus d'un an, j'y ai appris
                toutes les étapes de la préparation du pain, du petrissage, à la
                cuisson (Qui était ma principal fonction), mais également la
                fabrications de tous les produits boulanger, y compris
                croissants et pains au chocolat!
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Equipier Polyvalent</div>
            <div class="collapsible-body">
              <span>
                <h5>Quick Argenteuil | 2015-2016</h5>
                <br />
                Réception de livraisons et mise en place du comptoir de caisse
                le matin, puis prise de commandes le midi certains jours, et
                prise de commandes le soir, puis fermeture d'autre jours. (Et
                oui je suis un équipier polyvalent, polyvalent!)
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Développeur Front-End</div>
            <div class="collapsible-body">
              <span>
                <h5>In2car | 2019-2020</h5>
                <br />
                Développement d’une application de téléconsultation et
                télémédecine en utilisant React Native / Redux et Electron pour
                le front et un back-end NodeJS, mais également intégration d’un
                calendrier via l’API EasyAppointments. Initialement un stage, ce
                dernier à déboucher sur un CDD.
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Experience;
