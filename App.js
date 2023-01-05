import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, Button, Pressable, Switch, Text, View} from 'react-native';
import {home, newGame, settings} from "./StyleSheet";
import * as versionC from "./app.json";
import {useState} from "react";


function HomeScreen({navigation}) {

    const version = versionC.expo.version;
    // console.log(version);
    return (
        <View style={home.container}>
            <Text style={home.textHeader}> Local Poker System</Text>
            <Text style={home.version}>V: {version}</Text>
            <Pressable style={home.buttonSrtGme} onPress={() => navigation.navigate('Start Game')}>
                <Text style={home.buttonText}>Start Game</Text>
            </Pressable>
            <Pressable style={home.buttonSett} onPress={() => navigation.navigate('Settings')}>
                <Text style={home.buttonText}>Settings</Text>
            </Pressable>
        </View>
    );
}


//TODO
//  Start game tracking system
//  Working on input Fields Ln. 53
function StartGame({navigation}) {

    const newBox = () => {
        console.log("NewBox Created")
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable style={newGame.btnAddPlyr} onPress={newBox}>
                    <Text style={newGame.btnAddPlyrTxt}>New Player</Text>
                </Pressable>
            ),
        });
    }, [navigation]);

    return (
        <View style={newGame.container}>
            <Text>Start Game Page</Text>
            <View style={newGame.RedBox}/>
        </View>
    );
}

//TODO
//  Different Settings need configured
function Settings({navigation}) {


    const showAlert = () => {
        Alert.alert(
            'Save Changes',
            'Are you sure you want to save the changes?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Save', onPress: () => navigation.navigate('Home')},
            ],
            {cancelable: true},
        );
    };

    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={settings.container}>
            <Text>Enable option</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setIsEnabled}
                value={isEnabled}
            />

            <Pressable style={settings.buttonSave} onPress={showAlert}>
                <Text style={settings.buttonText}>Save</Text>
            </Pressable>


        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={{
                                  headerShown: false,
                              }}/>
                <Stack.Screen name="Start Game"
                              component={StartGame}
                              options={{
                                  headerBackVisible: false,
                                  gestureEnabled: false,
                              }}/>
                <Stack.Screen name="Settings"
                              component={Settings}
                              options={{
                                  headerBackVisible: false,
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}