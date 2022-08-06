import {StyleSheet} from "react-native";

const HS = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    HomeText: {
        color: "#61dafb",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 36,

    },
    Button: {},
    ButtonText: {},
})

const typography = StyleSheet.create({
    header: {
        color: "#61dafb",
        fontSize: 30,
        marginBottom: 36
    }
})

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    },
})

export default StyleSheet;