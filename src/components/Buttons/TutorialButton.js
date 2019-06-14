import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class TutorialButton extends Component {
    render() {
        return (
            <TouchableOpacity disabled={this.props.disabled} style={styles.button} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: '32%',
        backgroundColor: 'powderblue',
        borderRadius: 25,
        paddingVertical: 13,
        marginVertical: 10,
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});