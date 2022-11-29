import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Pressable, Text, View} from 'react-native';
import {home, newGame, settings} from "./StyleSheet";
import * as versionC from "./app.json";


function HomeScreen({navigation}) {

    const version = versionC.expo.version;
    // console.log(version);
    return (
        <View style={home.container}>
            <Text style={home.textHeader}> Local Poker System</Text>
            <Text style={home.version}>V: {version}</Text>
            {/*<Button style={home.button} title={"Settings"} onPress={() => navigator.navigate('Settings')}/>*/}
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
//  Different Settings need configured
function Settings({navigation}) {

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() =>  navigation.navigate('Home')} title={"Save"}/>
            ),
        });
    }, [navigation]);

    return (
        <View style={settings.container}>
            <Text>Settings Page</Text>
        </View>
    );
}

//TODO
//  Start game tracking system
function StartGame() {


    return (
        <View style={newGame.container}>
            <Text>Start Game Page</Text>
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