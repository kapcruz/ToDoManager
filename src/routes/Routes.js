import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import { App, Login, Register, ToDoTasks, DoneTasks } from '../screens/Screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Routes = () => {
    return (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen name="App" component={ App } options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Login" component= { Login } options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component= { Register }/>
            <Stack.Screen name="TaskList" component= {TaskTab} />
        </Stack.Navigator>
    );
};

export const TaskTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name= "To Do" component= { ToDoTasks } />
            <Tab.Screen name= "Done" component= {DoneTasks} />
        </Tab.Navigator>
    );
};

export default Routes;