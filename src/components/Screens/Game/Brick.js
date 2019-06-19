import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, View, TouchableOpacity } from 'react-native'

import MidiNumbers from '../../Piano/MidiNumbers';

class Brick extends Component {
    static propTypes = {
        midiNumber: PropTypes.number.isRequired,
        naturalKeyWidth: PropTypes.number.isRequired, // Width as a ratio between 0 and 1
        accidental: PropTypes.bool.isRequired,
        accidentalWidthRatio: PropTypes.number.isRequired,
        pitchPositions: PropTypes.object.isRequired,
        children: PropTypes.node,
      };

    static defaultProps = {
        accidentalWidthRatio: 0.65,
        pitchPositions: {
          C: 0,
          Db: 0.55,
          D: 1,
          Eb: 1.8,
          E: 2,
          F: 3,
          Gb: 3.5,
          G: 4,
          Ab: 4.7,
          A: 5,
          Bb: 5.85,
          B: 6,
        },
    };

    getAbsoluteKeyPosition(midiNumber) {
        const OCTAVE_WIDTH = 7;
        const { octave, pitchName } = MidiNumbers.getAttributes(midiNumber);
        const pitchPosition = this.props.pitchPositions[pitchName];
        const octavePosition = OCTAVE_WIDTH * octave;
        return pitchPosition + octavePosition;
      }
    
      getRelativeKeyPosition(midiNumber) {
        return (
          this.getAbsoluteKeyPosition(midiNumber) -
          this.getAbsoluteKeyPosition(this.props.noteRange.first)
        );
      }

      render() {
        const {
          naturalKeyWidth,
          accidentalWidthRatio,
          midiNumber,
          accidental,
          top,
          height
        } = this.props

        return (
          <View
            style={[ styles.ReactPiano__Key,
              accidental ? styles.ReactPiano__Key__accidental : styles.ReactPiano__Key__natural, 
              {
                top: top,
                left: ratioToPercentage(this.getRelativeKeyPosition(midiNumber) * naturalKeyWidth),
                width: ratioToPercentage(accidental ? accidentalWidthRatio * naturalKeyWidth : naturalKeyWidth),
                height: ratioToPercentage(height)
              },
            ]}/>
        );
      }
}

function ratioToPercentage(ratio) {
    return `${ratio * 100}%`;
}

const styles = StyleSheet.create({
    ReactPiano__Key: {
      position: 'absolute',
      borderWidth: 1,
      borderRadius: 5
    },
    ReactPiano__Key__natural: {
      backgroundColor: '#0000ff',
    },
    ReactPiano__Key__accidental: {
      backgroundColor: '#00008b',
      zIndex: 1
    },
  });

export default Brick;