import {StyleSheet} from "react-native";

// Shit the bed - doesnt work as I would like it to work
// URL - https://www.youtube.com/watch?v=lSTg5MFYSUA
// TODO - stylesheet
//  allow for Ln. 9 to be separate instead of [ ]_container...


export default StyleSheet.create({
    home_container: {
        padding: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    home_text: {
        color: "#61dafb",
        fontSize: 70,
        fontWeight: "bold",
        marginBottom: 36,
    },
    home_ngmButton: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: 3,
    },
    home_ngmText: {
        fontSize: 14,
        color: "white"

    },


    ngm_container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    ngm_button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
    },
    ngm_buttonText: {
        fontSize: 20,
        color: "white"
    },

})