import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TaskListView } from '../components/Components';
import { readTasksFromFirebaseAsync } from '../services/FirebaseApi';

const imgChecList = require('../assets/checklist.png');
const imgPlus = require('../assets/plus.png');

export default class ToDoTasks extends Component {
    
    state = {
        tasks: []
    }


    _goToTask() {
        this.props.navigation.navigate('Task');
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <TaskListView tasks={this.state.tasks} />
                <TouchableOpacity style={styles.floatingButton}
                    onPress={() => this._goToTask()}>
                        <Image source={imgPlus} style={styles.image} />
                    </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        readTasksFromFirebaseAsync(this._fetchTasks.bind(this));
    }

    _fetchTasks(tasks) {
        const tasksToDo = tasks.filter(t => !t.isDone);
        this.setState({ tasks: tasksToDo });
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