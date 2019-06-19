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
    }
  }

  componentDidMount() {
    const { noteRange } = this.props

    this.setState({
      ...this.state,
      noteRange: {
        first: MidiNumbers.fromNote(noteRange.first),
        last: MidiNumbers.fromNote(noteRange.last)
      }
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

  unitLength = 10;

  midis = [
      {pitch: 60, length: 1, time: 0}, 
      {pitch: 61, length: 1, time: 0}, 
      {pitch: 65, length: 2, time: 10}, 
      {pitch: 67, length: 4, time: 30},
      {pitch: 75, length: 1, time: 100}
  ];

  generateNotes(naturalKeyWidth){
      return this.midis.map(element => {
          const pitch = element['pitch'];
          const { isAccidental } = MidiNumbers.getAttributes(pitch);
          return(                
            <Brick
                naturalKeyWidth={ naturalKeyWidth }
                midiNumber={ pitch }
                noteRange={ this.state.noteRange }
                accidental={ isAccidental }
                top = {element['time']}
                height = {element['length'] * naturalKeyWidth}
              /> 
            );
      })
  }

  render() {
    const naturalKeyWidth = this.getNaturalKeyWidth();
    return (
      <Animated.View style={[styles.container, {top: this.props.startPos, transform: [{translateY: this.props.movingVal}]}]}>
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
