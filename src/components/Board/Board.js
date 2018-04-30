/* eslint-disable */
import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';

function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
        height = Math.min(document.documentElement.clientHeight, config.ratio.height),
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
    }

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
        boardTop: boardTop
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
            boardTop:getSizes().boardTop
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
                boardTop:getSizes().boardTop
            });
        });
    }

    render() {

        return (
            <div id="board" className="Board" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>
                {/* INTRODUCTION */}
                <div className="Board__slide Board__slide--white">
                    <Skew position="right" bg="CHAP00-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--white">
                <Edito content={this.props.datas.text[2].zone_3} positionBottom="30%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP00-BALLON.png" index="p2" positionLeft="-40%"></Element>
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="37%"></Edito>
                    <Element name="AP-CHAP00-TERRAIN.png" index="m2"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP00-GREBENNIKOV.png"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                <Edito content={this.props.datas.text[0].zone_2} positionBottom="10%"></Edito>
                <Element name="gif1988.gif" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="liberos-francais.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="henno.png" index="m1" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="grebennikov.png" index="m1" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="exiga.png" index="m1" positionLeft="10%"></Element>
                </div>
                {/* PARTIE 1 */}
                <div className="Board__slide">
                    <Skew position="right" name="CHAP01-TITRE.png" bg="CHAP01-OUVERTURE.png"></Skew>
                    <Element name="AP-CHAP00-FOND.png" index="m2"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[1].zone_2} positionBottom="52%"></Edito>
                    <Element name="CHAP01-CITATION1.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Video id="kxydkhBRWDWAhDqFR1y" ratio="1.8"></Video>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-VOLLEY-PEAU.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_3} positionTop="35%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-PHOTO1.png"></Element>
                    <Element name="AP-CHAP01-FILET.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[1].zone_4}></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="k3UoOesuCMNua7qFSN8" ratio="1.8"></Video>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="ngapeth.png"></Element>
                    <Element name="ngapeth2.png" index="m1"></Element>
                    <Edito content={this.props.datas.text[1].zone_5} positionBottom="55%"></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="k1QLuZ0kTB7SXbqFTCs" ratio="1"></Video>
                    <Element name="AP-CHAP01-JENIA.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                <Element name="jenia.png" index="p1"></Element>
                <Edito content={this.props.datas.text[1].zone_1} positionBottom="50%"></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="k2DeAI1kypLDT2qFRp1" ratio="1.8"></Video>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-LUBE.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_7} positionTop="55%"></Edito>
                </div>
                {/* PARTIE 2 */}
                <div className="Board__slide">
                    <Skew position="right" name="CHAP02-TITRE.png" bg="CHAP02-OUVERTURE.png"></Skew>
                    <Element name="AP-CHAP01-FOND.png" index="m2"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Video id="k4RGJ5YrKQ23lxqFReA" ratio="1.8"></Video>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP02-CULTURE-DEFENSE-TITRE.png" index="p1"></Element>
                    <Element name="CHAP02-CULTURE-DEFENSE.png"></Element>
                    <Edito content={this.props.datas.text[1].zone_6} positionTop="50%"></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="x6inz2d" ratio="1.8"></Video>
                    <Element name="AP-CHAP02-EXIGA.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                <Element name="exiga-action.png" index="p1"></Element>
                <Edito content={this.props.datas.text[1].zone_10} positionBottom="60%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="exiga-citation.png" index="m1" positionLeft="10%"></Element>
                    <Element name="AP-CHAP02-TERRAIN.png" index="m1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="henno-citation.png" index="m1" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="grebennikov-citation.png" index="m1" positionLeft="10%"></Element>
                </div>
                {/* PARTIE 3 */}
                <div className="Board__slide Board__slide--white">
                    <Skew position="right" name="CHAP03-TITRE.png" bg="CHAP03-OUVERTURE.png"></Skew>
                    <Element name="AP-CHAP02-HENNO-ACTION.png" index="m2"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Element name="CHAP03-FOOT.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_8} positionTop="37%"></Edito>
                    <Element name="CHAP03-GRADIENT1.png" index="m3"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP03-GREBENNIKOV.png"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Video id="k1wEfLXfGydFc0qFSYl" ratio="1.8"></Video>
                    <Element name="CHAP03-GRADIENT1.png" index="m1"></Element>
                    <Element name="AP-CHAP03-BALLONS.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Edito content={this.props.datas.text[1].zone_9} positionTop="20%"></Edito>
                    <Element name="CHAP03-GRADIENT1.png" index="m3"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Video id="k3GDywKNZ08greqFRlF" ratio="1.8"></Video>
                    <Element name="CHAP03-GRADIENT1.png" index="m3"></Element>
                    <Element name="AP-CHAP03-BALLON-VAGUE.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Element name="CHAP03-CITATION-HENNO.png" index="m1" positionLeft="10%"></Element>
                    <Element name="CHAP03-GRADIENT1.png" index="m3"></Element>
                    <Element name="AP-CHAP03-HENNO.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Edito content={this.props.datas.text[2].zone_1} positionTop="25%"></Edito>
                    <Element name="CHAP03-GRADIENT1.png" index="m3"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                <Element name="infographie-libero.png" index="p1"></Element>
                <Element name="CHAP03-GRADIENT1.png" index="m3"></Element>
                <Element name="AP-CHAP03-INTERDIT.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Video id="k6XTwVxjwCwpP5qFTA4" ratio="1"></Video>
                    <Element name="CHAP03-GRADIENT1.png" index="m3"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Element name="CHAP03-ARGENT.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="42%"></Edito>
                    <Element name="CHAP03-GRADIENT.png" index="m3"></Element>
                </div>
                <div className="Board__slide Board__slide--white">
                    <Edito content={this.props.datas.text[2].zone_7} positionTop="42%"></Edito>
                    <Element name="CHAP03-GRADIENT.png" index="m3"></Element>
                </div>
                {/* PARTIE 4 */}
                <div className="Board__slide">
                    <Skew position="right" name="CHAP04-TITRE.png" bg="CHAP04-OUVERTURE.png"></Skew>
                    <Element name="AP-CHAP04-FOND0.png" index="m2"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP04-DIEZ.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_4} positionTop="40%"></Edito>
                    <Element name="AP-CHAP04-FOND3.png" index="m1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="diez-citation1.png" index="m1" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="diez-citation2.png" index="m1" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[2].zone_5} positionTop="40%"></Edito>
                    <Element name="AP-CHAP04-FOND.png" index="m2"></Element>
                </div>
                <div className="Board__slide js-board-doubleslide">
                    <Edito content={this.props.datas.text[2].zone_6} positionTop="50%"></Edito>
                    <Element name="AP-CHAP04-FOND2.png" index="m1"></Element>
                </div>
                <div className="Board__slide">
                    <Skew position="left" bg="OURS.png"></Skew>
                </div>
                <div className="Board__slide">
                    <Masthead />
                </div>
            </div>
        )
    }
}
