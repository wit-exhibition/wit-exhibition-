import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import FloorIndicator from './FloorIndicator';
import Lamp from './Lamp';
import Lightbulb from './Lightbulb';
import FloorTeleportation from './FloorTeleportation';
import Person from './Person';
import Exit from './Exit';

class MilestoneRoom extends React.Component {

  renderLightSwitchHint() {
    return (
      <HintText
        rotation={{ y: 10 }}
        clickHintAddition={"die Lichtschalter"}
        position={{ x: -0.5, y: 1.6, z: -1.4 }}
        wrapCount={25}
      />
    )
  }

  renderLightOff(position) {
    return <Lightbulb position={ position } off={true}/>
  }

  render() {
    const {
      anyLightSwitchClicked,
      barbara,
      grace,
      audrey
     } = this.props

    const ROOM_COLOR = "#C025CE"

    return (
      <Entity>

      { !anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          person={"barbara"}
          roomColor={ROOM_COLOR}
          personClicked= { barbara.visible }
          cursor-listener />

        <Lamp position="0 3.9 -2.8"/>
        { barbara.visible && <Person person={ barbara }/> }
        { !barbara.visible && this.renderLightOff(barbara.lightbulbPosition) }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          person={"grace"}
          roomColor={ROOM_COLOR}
          personClicked= { grace.visible }
          cursor-listener />

        <Lamp position="2 3.9 -2"/>
        { grace.visible && <Person person={ grace }/> }
        { !grace.visible && this.renderLightOff(grace.lightbulbPosition) }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          person={"audrey"}
          roomColor={ROOM_COLOR}
          personClicked= { audrey.visible }
          cursor-listener />

        <Lamp position="-2 3.9 -2"/>
        { audrey.visible && <Person person={ audrey }/> }
        { !audrey.visible && this.renderLightOff(audrey.lightbulbPosition) }

        <FloorIndicator src={ "#milestone-floor" }/>

        <FloorTeleportation src={"#rails-floor"}
          position={"-1.5 0.155 -1.5"}
          positionCylinder={"-1.5 0.1 -1.5 "}
          teleportSound={true}
          destination={"newWaysRoom"}
          cursor-listener />

        <FloorTeleportation src={"#space-floor"}
          position={"1.5 0.155 -1.5"}
          positionCylinder={"1.5 0.1 -1.5"}
          teleportSound={true}
          destination={"spaceRoom"}
          cursor-listener />

        <Exit />
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    anyLightSwitchClicked: state.anyLightSwitchClicked,
    audrey: state.audrey,
    barbara: state.barbara,
    grace: state.grace
  }
}

const milestoneRoom = connect( mapStateToProps )(MilestoneRoom)

export default milestoneRoom;
