import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const imgChecList = require('../assets/checklist.png');
const imgPlus = require('../assets/plus.png');

export default class ToDoTasks extends Component {

    _goToTask() {
        this.props.navigation.navigate('Task');
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <TouchableOpacity style={styles.floatingButton}
                    onPress={() => this._goToTask()}>
                        <Image source={imgPlus} style={styles.image} />
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
    },
    icon: {
        width: 26,
        height: 26,
    },
    image: {
        width: 50,
        height: 50,
    },
    floatButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    }
});