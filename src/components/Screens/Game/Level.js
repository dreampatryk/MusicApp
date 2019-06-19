import React, { Component } from 'react';
import { Image, StyleSheet, View, Animated, Dimensions } from 'react-native';
//import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import TutorialButton from "../../Buttons/TutorialButton";
import TutorialTexts from "../../../styles/Texts/TutorialTexts";
import Piano from '../../Piano/Piano';
import Board from './Board';
import GoBackHeader from "../../Others/GoBackHeader";



export default class Level extends Component {
    state = {
        noteIndex: 0,
        movingVal: new Animated.Value(0)
    };
    notesLength = this.props.navigation.getParam('notesLength', 0);
    notes       = this.props.navigation.getParam('notes', []);
    pianoElement = React.createRef();

    onPlay = (note) => this.pianoElement.current.simulateOnTouchStart(note);

    onStop = (note) => this.pianoElement.current.simulateOnTouchEnd(note);

    moveNotes(){
        setInterval(() => {
            //console.warn(this.state.movingVal._value)
        }, 100);

        Animated.timing(
            this.state.movingVal,
            {
                toValue: Dimensions.get('window').height,
                duration: 3000
            }
        ).start();
    }

    componentDidMount(){
        this.moveNotes();
    }

    render() {
        const {navigation} = this.props;
        const firstNote = 'c4';
        const lastNote = 'c#6';
        return (
            <View style={styles.container}>
                <View style={{height: '15%', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <GoBackHeader  text="Go back to main menu" onPress={() => this.props.navigation.goBack()}/>
                </View>
                <Board noteRange={{first: firstNote, last: lastNote}} startPos={0} movingVal={this.state.movingVal}/>
                <Piano ref={this.pianoElement} noteRange={{first: firstNote, last: lastNote}} onPlayNoteInput = {this.onPlay} onStopNoteInput = {this.onStop}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1, 
    backgroundColor: 'black',
  }
})

