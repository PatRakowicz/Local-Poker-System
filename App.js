import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>

            <Text> Home Screen</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Players')} style={styles.button}>
                <Text style={styles.buttonText}>Players</Text>
            </TouchableOpacity>

        </View>
    );
}

function PlayerScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.container}>

                <Text>The start of LPS (Local Poker System)</Text>
                <StatusBar style="auto"/>

                <TouchableOpacity
                    onPress={() => alert('Hello World')} style={styles.button}>
                    <Text style={styles.buttonText}>New Game</Text>
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
                <Stack.Screen name={"Players"} component={PlayerScreen}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    }

});
