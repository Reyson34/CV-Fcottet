import React, { Component } from 'react';
import M from 'materialize-css';

class Experience extends Component {
    state = {}

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
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
                                L’atelier de Dardilly | 2013-2014
                            <br />
                                En alternance pour passer le CAP Boulangerie avec les compagnons du devoir etdu tour de france.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header">Equipier Polyvalent</div>
                        <div class="collapsible-body">
                            <span>
                                Quick Argenteuil | 2015-2016
                                <br />
                                Réception de livraisons et mise en place du comptoir de caisse le matin, puis prise de commandes le midi.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header">Développeur Front-End</div>
                        <div class="collapsible-body"><span>
                            In2car | 2019-2020
                            <br />
                            Développement d’une application de téléconsultation et télémédecine en utilisant
                            React Native / Redux et Electron pour le front et un back-end NodeJS,
                            mais également intégration d’un calendrier via l’API EasyAppointments.
                            Initialement un stage, ce dernier à déboucher sur un CDD.
                            </span></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Experience;