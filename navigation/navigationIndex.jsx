import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PasswordEntry from "../screens/PasswordEntry";
import InterestsScreen from "../screens/InterestsScreen";

const Stack = createNativeStackNavigator();

export default function NavigationIndex() {
    return (
        <NavigationContainer >
            <Root/>
        </NavigationContainer>
    )
}

function Root(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"PasswordEntry"} component={PasswordEntry} />
            <Stack.Screen name={"Interests"} component={InterestsScreen} />
        </Stack.Navigator>
    )
}
