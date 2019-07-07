import React, { Component } from 'react';
import { Image, StyleSheet, View, Animated, Dimensions, Button } from 'react-native';
//import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import TutorialButton from "../../Buttons/TutorialButton";
import TutorialTexts from "../../../styles/Texts/TutorialTexts";
import Piano from '../../Piano/Piano';
import Board from './Board';

export default class Level extends Component {
    state = {
        noteIndex: 0,
        movingVal: new Animated.Value(0),
        intervalID: 0
    };
    notesLength = this.props.navigation.getParam('notesLength', 0);
    notes       = this.props.navigation.getParam('notes', []);
    pianoElement = React.createRef();

    onPlay = (note) => this.pianoElement.current.simulateOnTouchStart(note);

    onStop = (note) => this.pianoElement.current.simulateOnTouchEnd(note);

    moveNotes(start){
        Animated.timing(
            start,
            {
                toValue: 700,
                duration: 10000
            }
        ).start(() => {
            clearInterval(this.state.intervalID);
            midis.forEach(val => this.onStop(val['pitch']));
        });
    }

    componentDidMount(){
        this.moveNotes(this.state.movingVal);
        this.state.intervalID = setInterval(() => {
            midis.forEach(val => {
                if(val['start']*5 <= this.state.movingVal._value && val['end']*5 >= this.state.movingVal._value){
                    this.onPlay(val['pitch']);
                }
                else{
                    this.onStop(val['pitch']);
                }
            })
        }, 10);
    }

    render() {
        const {navigation} = this.props;
        const firstNote = 'c4';
        const lastNote = 'c#6';
        return (
            <View style={styles.container}>
                <Board noteRange={{first: firstNote, last: lastNote}} startPos={0} movingVal={this.state.movingVal} midis={midis}/>
                <Piano ref={this.pianoElement} noteRange={{first: firstNote, last: lastNote}} onPlayNoteInput = {this.onPlay} onStopNoteInput = {this.onStop}/>
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
    {pitch: 60, start: 0, end: 10}, 
    {pitch: 61, start: 10, end: 20}, 
    {pitch: 65, start: 10, end: 30}, 
    {pitch: 67, start: 30, end: 40},
    {pitch: 79, start: 40, end: 60},
    {pitch: 77, start: 60, end: 80},
    {pitch: 81, start: 80, end: 120},
    {pitch: 63, start: 80, end: 140},
];

