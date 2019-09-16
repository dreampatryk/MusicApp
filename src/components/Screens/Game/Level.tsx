import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import Piano from '../../Piano/Piano';
import Board from './Board';

interface Props {
  navigation: Navigation;
}
interface State {
  noteIndex: number;
  movingVal: Animated.Value;
  intervalID: any;
}

export default class Level extends React.Component<Props, State> {
  state: State = {
    noteIndex: 0,
    movingVal: new Animated.Value(0),
    intervalID: 0,
  };

  firstNote = 'c4';
  lastNote = 'c#6';
  notesLength: number = this.props.navigation.getParam('notesLength', 0);
  notes: any = this.props.navigation.getParam('notes', []);
  pianoElement: any = <Piano
    noteRange={{ first: this.firstNote, last: this.lastNote }}
    onPlayNoteInput={() => { }}
    onStopNoteInput={() => { }}
  />

  onPlay = (note: any) => this.pianoElement.current.simulateOnTouchStart(note);

  onStop = (note: any) => this.pianoElement.current.simulateOnTouchEnd(note);

  moveNotes(start: any) {
    Animated.timing(start, {
      toValue: 700,
      duration: 10000,
    }).start(() => {
      clearInterval(this.state.intervalID);
      midis.forEach(val => this.onStop(val['pitch']));
    });
  }

  componentDidMount() {
    this.moveNotes(this.state.movingVal);
    this.state.intervalID = setInterval(() => {
      midis.forEach(val => {
        if (
          val['start'] * 5 <= this.state.movingVal._value &&
          val['end'] * 5 >= this.state.movingVal._value
        ) {
          this.onPlay(val['pitch']);
        } else {
          this.onStop(val['pitch']);
        }
      });
    }, 10);
  }

  render() {
    const { navigation } = this.props;
    const firstNote = 'c4';
    const lastNote = 'c#6';
    return (
      <View style={styles.container}>
        <Board
          noteRange={{ first: this.firstNote, last: this.lastNote }}
          startPos={0}
          movingVal={this.state.movingVal}
          midis={midis}
        />
        {this.pianoElement}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

const midis = [
  { pitch: 60, start: 0, end: 10 },
  { pitch: 61, start: 10, end: 20 },
  { pitch: 65, start: 10, end: 30 },
  { pitch: 67, start: 30, end: 40 },
  { pitch: 79, start: 40, end: 60 },
  { pitch: 77, start: 60, end: 80 },
  { pitch: 81, start: 80, end: 120 },
  { pitch: 63, start: 80, end: 140 },
];
