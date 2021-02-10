import React, { Component } from 'react';

class Info extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>Nom: COTTET</p>
                <p>Prenom: Félix</p>
                <p>Ville: Argenteuil, 95100</p>
                <p>Permis B: Oui</p>
                <p>Date de naissance: 8 Mars 1992</p>
                <p>Hobbies: Jeux vidéo, JDR, développement</p>
            </div>
        );
    }
}

export default Info;