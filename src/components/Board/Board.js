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
                <div className="Board__slide js-board-doubleslide">
                    <Skew position="right" bg="CHAP00-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide">
                </div>
                <div className="Board__slide">
                    <Element name="CHAP00-TITRE1.png" index="p1" positionLeft="-40%"></Element>
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="37%"></Edito>
                    <Element name="AP-CHAP00-CONFETTIS.png" index="m2"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP00-CARNAVAL1.png"></Element>
                    <Element name="CHAP00-MASQUE.png" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                <Edito content={this.props.datas.text[0].zone_2} positionBottom="10%"></Edito>
                <Element name="gif1988.gif" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="liberos-francais.png" index="p1"></Element>
                </div>
                {/* CHAP 1 */}
                <div className="Board__slide">
                    <Element name="henno.png" index="m1" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="exiga.png" index="m1" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="grebennikov.png" index="m1" positionLeft="10%"></Element>
                </div>
                {/* PARTIE 1 */}
                <div className="Board__slide">
                    <Skew position="right" name="CHAP01-TITRE.png" bg="CHAP01-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[1].zone_2} positionBottom="52%"></Edito>
                    <Element name="CHAP01-CITATION1.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-RATEE.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_3} positionTop="35%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-PHOTO1.png"></Element>
                    <Element name="AP-CHAP01-FEMKE.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[1].zone_4}></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                <Element name="jenia.png" index="p1"></Element>
                <Edito content={this.props.datas.text[1].zone_1} positionBottom="44%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="ngapeth.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_5} positionBottom="44%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CHOC.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_7} positionTop="50%"></Edito>
                </div>
                {/* PARTIE 2 */}
                <div className="Board__slide">
                    <Skew position="right" name="CHAP02-TITRE.png" bg="CHAP02-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                    <Element name="AP-CHAP01-MONTAGNE-OR-1.png" index="m1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP02-CULTURE-DEFENSE-TITRE.png" index="p1"></Element>
                    <Element name="CHAP02-CULTURE-DEFENSE.png"></Element>
                    <Edito content={this.props.datas.text[1].zone_6} positionTop="50%"></Edito>
                    <Element name="AP-CHAP01-MONTAGNE-OR-2.png" index="m2"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CITATION5.png"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CITATION6.png"></Element>
                </div>
                {/* PARTIE 3 */}
                <div className="Board__slide">
                    <Skew position="right" name="CHAP03-TITRE.png" bg="CHAP03-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_8} positionTop="37%"></Edito>
                    <Element name="CHAP01-ZIG.png" index="p1"></Element>
                </div>
                <div className="Board__slide js-board-doubleslide">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_9} positionTop="37%"></Edito>
                    <Element name="CHAP01-ZIG.png" index="p1"></Element>
                </div>
                <div className="Board__slide js-board-doubleslide">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="50%"></Edito>
                    <Element name="AP-CHAP02-FRITES-1.png" index="p1" positionLeft="-50%"></Element>
                    <Element name="CHAP02-PIGEON.png"></Element>
                </div>
                <div className="Board__slide">
                </div>
                <div className="Board__slide js-board-doubleslide">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP02-AMI.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Element name="AP-CHAP02-FRITES-2.png" index="m1"></Element>
                    <Edito content={this.props.datas.text[2].zone_4}></Edito>
                </div>
                {/* PARTIE 4 */}
                <div className="Board__slide">
                    <Skew position="right" name="CHAP04-TITRE.png" bg="CHAP04-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="50%"></Edito>
                    <Element name="CHAP02-PIGEON.png"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP02-AMI.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Element name="AP-CHAP02-FRITES-2.png" index="m1"></Element>
                    <Edito content={this.props.datas.text[2].zone_4}></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="AP-CHAP03-CAGE.png" index="m2"></Element>
                    <Skew position="left" bg="OURS.png"></Skew>
                </div>
                {/* <Video id="k1DnGSfRTDorXdn1XDn" ratio="1.37"></Video> */}
                {/* <StaticElement name="CHAP03-AVENDRE.png" bg="AP-CHAP03-AVENDRE.png" size="double"></StaticElement> */}
                <div className="Board__slide">
                    <Masthead />
                </div>
            </div>
        )
    }
}
