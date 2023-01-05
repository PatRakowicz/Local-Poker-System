import {StyleSheet} from 'react-native';

export const home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 150,
    },
    textHeader: {
        fontSize: 40,
        fontWeight: "bold",
        //
    },
    version: {
        fontSize: 15,
        fontWeight: '200',
        marginBottom: 150,
        marginVertical: 25,
    },
    buttonSrtGme: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'darkgreen',
        marginBottom: 50,
    },
    buttonSett: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'darkorchid',
        marginBottom: 50,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export const newGame = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAddPlyr: {},
    btnAddPlyrTxt: {
        color: 'green',
    },
    RedBox: {
        width: 120,
        height: 120,
        backgroundColor: '#00BCD4'
    }
});

export const settings = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSave: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'darkorchid',
        marginBottom: 50,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});