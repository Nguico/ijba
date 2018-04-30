import React, { Component } from 'react';
import './Masthead.css';

export default class Element extends Component {

    componentDidMount() {
        require('../../js/external/twitter.js')();
    }

    render() {

        return (
            <div className="Masthead">
                <div className="Masthead__item">
                    <span className="Masthead__label">Auteurs</span>
                    <span className="Masthead__details">Pierre Barbin <a href="//twitter.com/pierre_bbn" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    <br />Florian Chaaban <a href="//twitter.com/florianchbn" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    <br />Kévin Gaignoux <a href="//twitter.com/kggnx" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    <br />Laure Giuily <a href="//twitter.com/lgiuily" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    <br />Julie Lassale <a href="//twitter.com/julielslama" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    <br />Jules Lonchampt <a href="//twitter.com/j_lonchampt" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Intégration / Graphisme</span>
                    <span className="Masthead__details">Nicolas Guitard <a href="//twitter.com/nicogtrd" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    <br />Camille de Oliveira</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Photos</span>
                    <span className="Masthead__details">L’Equipe, Associazione Sportiva Volley Lube, GFC Ajaccio Volley Ball, Christian Besson, Hélène Matrat, Florent Selvini.</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Musique</span>
                    <span className="Masthead__details">Ben Jammin’ - Knwnasaplayer</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Conseillère de rédaction</span>
                    <span className="Masthead__details">Rayya Roumanos</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Directeur de la publication</span>
                    <span className="Masthead__details">Arnaud Schwartz</span>
                </div>
            </div>
        );
    }
}
