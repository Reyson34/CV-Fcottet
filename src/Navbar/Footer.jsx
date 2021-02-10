import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer class="page-footer  grey darken-4">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Un peu plus sur moi:</h5>
                            <p class="grey-text text-lighten-4">Respirant la joie de vivre, ma bonne humeur n’a d’égale que mon amour pour le travail bien fait.
                            Après un CAP en Boulangerie, mon coup de foudre pour le développement à déclenché ma reconversion dans le milieu du web. J’aime également découvrir et apprendre de nouvelles technologies afin d’étendre mes connaissances.
                            </p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Contact</h5>
                            <ul>
                                <li><i class="material-icons">email</i> Reyson@live.fr</li>
                                <li><i class="material-icons">phone</i> 06 29 21 74 36</li>
                                <li><i class="material-icons">location_on</i> 6 Boulevard Leon Feix, 95100 Argenteuil</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        Mon Git Hub:
                        <a target="_blank" href="https://github.com/Reyson34"> https://github.com/Reyson34</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;