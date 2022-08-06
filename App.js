import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import SS from "./StyleSheet";
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();


// Home Screen w/ options - new game - version
function HomeScreen({navigation}) {
    return (
        <View style={SS.HS.container}>

            {/*<TouchableOpacity
                onPress={() => navigation.navigate('New Game')} style={SS.button}>
                <Text style={SS.buttonText}>Players</Text>
            </TouchableOpacity>*/}

            <Text> Home Screen</Text>

            <Text style={SS.HS.HomeText}>LPS</Text>

            {/*TODO: Options*/}
            {/*TODO: Version*/}

        </View>
    );
}

// New Game Page
function NewGameMenu({navigation}) {
    return (
        <View style={SS.main.container}>
            <View style={SS.main.container}>

                <Text>The start of LPS (Local Poker System)</Text>
                <StatusBar style="auto"/>

                <TouchableOpacity
                    onPress={() => alert('Hello World')} style={SS.main.button}>
                    <Text style={SS.main.buttonText}>New Game</Text>
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
                <Stack.Screen
                    name={"Home"}
                    component={HomeScreen}
                    options={{
                        // title: '', This is for a title of the screen (If needed)
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"New Game"}
                    component={NewGameMenu}
                    options={{}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
