import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import SS from "./StyleSheet";
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator();


/*

* */

// Home Screen w/ options - new game - version
function HomeScreen({navigation}) {
    return (

        /*TODO: Not in center*/
        <View style={SS.home_container}>

            <Text style={SS.home_text}>L P S</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('New Game')} style={SS.home_ngmButton}>
                <Text style={SS.ngm_buttonText}>Players</Text>
            </TouchableOpacity>
            <TouchableOpacity
                OnPress={() => navigation.navigate('Settings')} style={SS}>
                <Text style={SS}>Settings</Text>
            </TouchableOpacity>

            {/*TODO: Version*/}
        </View>
    );
}

// New Game Page
function NewGameMenu({navigation}) {
    return (
        <View style={SS.ngm_container}>

            <Text>The start of LPS (Local Poker System)</Text>
            <StatusBar style="auto"/>

            <TouchableOpacity
                onPress={() => alert('Hello World')} style={SS.ngm_button}>
                <Text style={SS.ngm_buttonText}>New Game</Text>
            </TouchableOpacity>

            <Button
                onPress={() => alert("Learning More")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />


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
