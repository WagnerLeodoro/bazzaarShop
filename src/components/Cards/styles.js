import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 200,
        marginLeft: 25,
        marginRight: 25,
        justifyContent: 'space-around',
    },
    image: {
        width: 150,
        height: 200,
        borderRadius: 5,
        justifyContent: 'center'
    },
    btnContainer: {
        marginTop: -45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        width: 150,
        marginLeft: 25,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center'
    }
});