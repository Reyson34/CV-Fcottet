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
                        <div class="collapsible-header">Bac S</div>
                        <div class="collapsible-body">
                            <span>
                                Lycée La Roque | 2010
                            <br />
                                Obtention du Bac S avec option Biologie dans le lycée La roque, dans l'aveyron.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header">CAP Boulanger</div>
                        <div class="collapsible-body">
                            <span>
                                Les compagnons du devoir et tu tour de france (Lyon) | 2014
                                <br />
                                Après une année en alternance à Lyon en tant qu'apprenti, j’obtiens mon CAP en
                                faisant face à un jury composé de MOFs (Meilleur Ouvrier de France).
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header">Développement</div>
                        <div class="collapsible-body"><span>
                            Ecole 42 | 2016-2020
                            <br />
                            Après une période de test d’un mois (La piscine) j'ai intégré 42. Prônant l’autoformation j’y apprends, le C et l’infographie.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Experience;