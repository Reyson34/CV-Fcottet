import React, { Component } from 'react';
import M from 'materialize-css';

class Compétences extends Component {
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
                        <div class="collapsible-header">Développement</div>
                        <div class="collapsible-body">
                            <span>
                                <div class="row">
                                    <div class="col s6">
                                        <span>
                                            React Native:
                                        <br />
                                        Redux:
                                        <br />
                                        C:
                                        <br />
                                        Git:
                                        <br />
                                        Gimp
                                        <br />
                                        Electron:
                                        <br />
                                        OpenGL
                                        </span>
                                    </div>
                                    <div class="col s6"><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                                        <i class="material-icons">star</i><i class="material-icons">star</i>
                                        <br />
                                        <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                                        <i class="material-icons">star</i><i class="material-icons">star</i>
                                        <br />
                                        <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                                        <i class="material-icons">star</i><i class="material-icons">star</i>
                                        <br />
                                        <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                                        <i class="material-icons">star</i><i class="material-icons">star_border</i>
                                        <br />
                                        <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                                        <i class="material-icons">star</i><i class="material-icons">star_border</i>
                                        <br />
                                        <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                                        <i class="material-icons">star_border</i><i class="material-icons">star_border</i>
                                        <br />
                                        <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                                        <i class="material-icons">star_border</i><i class="material-icons">star_border</i>
                                    </div>
                                </div>
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