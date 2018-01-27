import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement';
import HoverAnimation from './HoverAnimation';
import FloorIndicator from './FloorIndicator';

class NewWaysRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderEvelyn() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#evelynPortrait" }
        position={ "0 2.6 -2" }
        rotation={ "0 0 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "-0.002 1.6 -2.912" }
          sound="on: click; src: #evelyn-audio"/>
      </Entity>
    )
  }

  renderHedy() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#hedyPortrait" }
        position={ "-2 2.6 -2" }
        rotation={ "0 50 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "-1.5 1.6 -2.912" }
          sound="on: click; src: #hedy-audio"/>
      </Entity>
    )
  }

  renderKamila() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#kamilaPortrait" }
        position={ "2 2.6 -2" }
        rotation={ "0 -50 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "1.5 1.6 -2.912" }
          sound="on: click; src: #kamila-audio"/>
      </Entity>
    )
  }

  renderLightSwitchHint() {
    return (
      <HintText
        rotation={{ y: 20 }}
        hint={"Klick auf die Lichtschalter!"}
        position={{ x: -0.5, y: 1.6, z: -1.4 }}
        wrapCount={20}
      />
    )
  }

  render() {
    return (
      <Entity>

      { !this.props.anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"evelyn"}
          store={ this.store } />

        { this.props.evelynElementVisible && this.renderEvelyn() }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"hedy"}
          store={ this.store } />

        { this.props.hedyElementVisible && this.renderHedy() }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"kamila"}
          store={ this.store } />

        { this.props.kamilaElementVisible && this.renderKamila() }

        <FloorIndicator src={ "#rails-floor" }/>

        <HintText
          rotation={{ y: 50 }}
          hint={"Exit"}
          position={{ x: -2.8, y: 1, z: -2 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          store={ this.store } />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: -2 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="milestoneRoom"
          store={ this.store }/>
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    evelynElementVisible: state.evelynElementVisible,
    hedyElementVisible: state.hedyElementVisible,
    kamilaElementVisible: state.kamilaElementVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const newWaysRoom = connect( mapStateToProps )(NewWaysRoom)

export default newWaysRoom;
