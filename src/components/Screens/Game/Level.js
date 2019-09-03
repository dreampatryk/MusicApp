import React, { Component } from 'react';
import { Image, StyleSheet, View, Animated, Dimensions, Button } from 'react-native';

import MenuButton from '../../Buttons/MenuButton';
import TutorialButton from "../../Buttons/TutorialButton";
import TutorialTexts from "../../../styles/Texts/TutorialTexts";
import Piano from '../../Piano/Piano';
import Board from './Board';
import GoBackHeader from "../../Others/GoBackHeader";

import range from 'just-range'

export default class Level extends Component {
    state = {
        noteIndex: 0,
        movingVal: new Animated.Value(0),
        started: false
    };
    notesLength = this.props.navigation.getParam('notesLength', 0);
    notes = this.props.navigation.getParam('notes', []);
    pianoElement = React.createRef();
    intervalID = 0;

    onPlay = (note) => this.pianoElement.current.simulateOnTouchStart(note);

    onStop = (note) => this.pianoElement.current.simulateOnTouchEnd(note);

    moveNotes() {
        Animated.timing(
            this.state.movingVal,
            {
                toValue: 700,
                duration: 30000
            }
        ).start(() => {
            clearInterval(this.intervalID);
            midis.forEach(val => this.onStop(val['pitch']));
        });
    }

    componentDidMount() {
        midisMap = range(0, 141).map(() => [])
        midis.forEach(element => {
            for (i = element['start']; i < element['end']; i++) {
                midisMap[i].push(element['pitch'])
            }
        })

        previous = []

        this.intervalID = setInterval(() => {
            if (previous.toString() !== midisMap[Math.trunc((this.state.movingVal._value) / 5)].toString()) {
                previous.forEach(note => this.onStop(note))
                console.log(Math.trunc((this.state.movingVal._value) / 5));
                previous = midisMap[Math.trunc((this.state.movingVal._value) / 5)];
                midisMap[Math.trunc((this.state.movingVal._value) / 5)].forEach(note => this.onPlay(note))
            }
        }, 10);

        this.moveNotes();
    }

    render() {
        const { navigation } = this.props;
        const firstNote = 'c4';
        const lastNote = 'c#6';
        return (
            <View style={styles.container}>
                <Board noteRange={{ first: firstNote, last: lastNote }} startPos={0} movingVal={this.state.movingVal} midis={midis} />
                <Piano ref={this.pianoElement} noteRange={{ first: firstNote, last: lastNote }} onPlayNoteInput={this.onPlay} onStopNoteInput={this.onStop} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    }
})

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

