import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import SS from "./StyleSheet";
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View style={SS.container}>

            <Text> Home Screen</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('New Game')} style={SS.button}>
                <Text style={SS.buttonText}>Players</Text>
            </TouchableOpacity>

        </View>
    );
}

function NewGameMenu({navigation}) {
    return (
        <View style={SS.container}>
            <View style={SS.container}>

                <Text>The start of LPS (Local Poker System)</Text>
                <StatusBar style="auto"/>

                <TouchableOpacity
                    onPress={() => alert('Hello World')} style={SS.button}>
                    <Text style={SS.buttonText}>New Game</Text>
                </TouchableOpacity>

                <Button
                    onPress={() => alert("Learning More")}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

            </View>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"New Game"} component={NewGameMenu}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
