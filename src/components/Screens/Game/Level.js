import React, { Component } from 'react';
import { Image, StyleSheet, View, Animated, Dimensions } from 'react-native';
//import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import TutorialButton from "../../Buttons/TutorialButton";
import TutorialTexts from "../../../styles/Texts/TutorialTexts";
import Piano from '../../Piano/Piano';
import Board from './Board';



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
        }, 100)

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
        return (
            <View style={styles.container}>
                <Board noteRange={{first: 'c4', last: 'c#6'}} startPos={0} movingVal={this.state.movingVal}/>
                
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

