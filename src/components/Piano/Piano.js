import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, View, Button } from 'react-native'

import range from 'just-range'

import Key from './Key'

import MidiNumbers from './MidiNumbers'

class Piano extends Component {
  state = {
    noteRange: {
      first: MidiNumbers.fromNote('c4'),
      last: MidiNumbers.fromNote('e5')
    },
    keyReferences: []
  };

  static propTypes = {
    onPlayNoteInput: PropTypes.func.isRequired,
    onStopNoteInput: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { noteRange } = this.props;

    this.setState({
      ...this.state,
      noteRange: {
        first: MidiNumbers.fromNote(noteRange.first),
        last: MidiNumbers.fromNote(noteRange.last)
      },
      keyReferences: range(MidiNumbers.fromNote(noteRange.first), MidiNumbers.fromNote(noteRange.last) + 1).map(React.createRef)
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

  simulateOnTouchStart(note){
    if(note < this.state.noteRange.first || note > this.state.noteRange.last)
      return;

    index = note - this.state.noteRange.first;
    this.state.keyReferences[index].current.simulateOnTouchStart();
  }

  simulateOnTouchEnd(note){
    if(note < this.state.noteRange.first || note > this.state.noteRange.last)
      return;
    
    index = note - this.state.noteRange.first;
    this.state.keyReferences[index].current.simulateOnTouchEnd();
  }

  render() {
    const naturalKeyWidth = this.getNaturalKeyWidth();
    return (
      <View style={ styles.container}>
        {
          this.getMidiNumbers().map(midiNumber => {
            const { isAccidental } = MidiNumbers.getAttributes(midiNumber);
            return (
              <Key ref={this.state.keyReferences[midiNumber-this.state.noteRange.first]}
                naturalKeyWidth={ naturalKeyWidth }
                midiNumber={ midiNumber }
                noteRange={ this.state.noteRange }
                accidental={ isAccidental }
                onPlayNoteInput={ this.props.onPlayNoteInput }
                onStopNoteInput={ this.props.onStopNoteInput }
                useTouchEvents={ true }
                key={ midiNumber }
              />                  
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'relative', 
    backgroundColor: 'transparent', 
    marginBottom: 100
  }
})

export default Piano
