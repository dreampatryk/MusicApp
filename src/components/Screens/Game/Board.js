import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, View, Animated } from 'react-native'

import range from 'just-range'

import MidiNumbers from '../../Piano/MidiNumbers'

import Brick from './Brick'

class Board extends Component {
  state = {
    noteRange: {
      first: MidiNumbers.fromNote('c4'),
      last: MidiNumbers.fromNote('e5')
    },
    midis: []
  }

  componentDidMount() {
    const { 
      noteRange,
      midis 
    } = this.props

    this.setState({
      ...this.state,
      noteRange: {
        first: MidiNumbers.fromNote(noteRange.first),
        last: MidiNumbers.fromNote(noteRange.last)
      },
      midis: midis 
    })
  }

  getNaturalKeyCount() {
    return this.getMidiNumbers().filter((number) => {
      const { isAccidental } = MidiNumbers.getAttributes(number);
      return !isAccidental;
    }).length;
  }

  getNaturalKeys() {
    return this.getMidiNumbers().filter((number) => {
      const { isAccidental } = MidiNumbers.getAttributes(number);
      return !isAccidental;
    });
  }

  getAccidentalKeys() {
    return this.getMidiNumbers().filter((number) => {
      const { isAccidental } = MidiNumbers.getAttributes(number);
      return isAccidental;
    });
  }

  getMidiNumbers() {
    return range(this.state.noteRange.first, this.state.noteRange.last + 1);
  }

  getNaturalKeyWidth() {
    return 1 / this.getNaturalKeyCount();
  }

  unitLength = 5;

  generateNotes(naturalKeyWidth){
      return this.state.midis.map(element => {
          const pitch = element['pitch'];
          const { isAccidental } = MidiNumbers.getAttributes(pitch);
          return(                
            <Brick
                naturalKeyWidth={ naturalKeyWidth }
                midiNumber={ pitch }
                noteRange={ this.state.noteRange }
                accidental={ isAccidental }
                top = {element['start']*this.unitLength}
                height = {(element['end']-element['start'])*this.unitLength}
              /> 
            );
      })
  }

  render() {
    const naturalKeyWidth = this.getNaturalKeyWidth();
    return (
      <Animated.View style={[styles.container, {top: this.props.startPos, transform: [{translateY: this.props.movingVal}, {rotateX: '180deg'}]}]}>
          {this.generateNotes(naturalKeyWidth)}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', 
    backgroundColor: 'transparent', 
  }
})

export default Board;
