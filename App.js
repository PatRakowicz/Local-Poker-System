import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {home, newGame} from "./StyleSheet";


function HomeScreen() {
    return (
        <View style={home.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>This is a text on how it will update if it will at all.</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

function StartGame() {
    return (
      <view style={newGame.container}>

      </view>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Details">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Start Game" component={StartGame}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}