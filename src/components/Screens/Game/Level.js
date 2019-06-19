import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button, Orientation } from 'react-native';
//import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import TutorialButton from "../../Buttons/TutorialButton";
import TutorialTexts from "../../../styles/Texts/TutorialTexts";
import Piano from '../../Piano/Piano';



export default class Level extends Component {
    state = {
        noteIndex: 0,
    };
    notesLength = this.props.navigation.getParam('notesLength', 0);
    notes       = this.props.navigation.getParam('notes', []);
    pianoElement = React.createRef();

    onPlay = (note) => this.pianoElement.current.simulateOnTouchStart(note);

    onStop = (note) => this.pianoElement.current.simulateOnTouchEnd(note);

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={{width: 100, height: 100, backgroundColor: 'red'}} onTouchStart={() => this.onPlay('c4')} onTouchEnd={() => this.onStop('c4')}/>
                <Piano ref={this.pianoElement} noteRange={{first: 'c4', last: 'c#6'}} onPlayNoteInput = {this.onPlay} onStopNoteInput = {this.onStop}></Piano>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1, 
    backgroundColor: 'green',
  }
})

