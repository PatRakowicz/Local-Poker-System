import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>

            <Text>The start of LPS (Local Poker System)</Text>
            <StatusBar style="auto"/>

            <TouchableOpacity
                onPoress={() => alert('Hello World')} style={styles.button}>
                <Text style={styles.buttonTest}>New Game</Text>
            </TouchableOpacity>

        </View>
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
    buttonTest: {
        fontSize: 20,
        color: "white"
    }

});
