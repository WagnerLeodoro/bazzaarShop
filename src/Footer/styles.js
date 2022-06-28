import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 360,
        height: 150,
        marginLeft: 20,
        marginBottom: 30,
        alignItems: 'center',
        opacity: 0.8
    },
    textContainer: {
        width: 360,
        height: 150,
        backgroundColor: "#000000c0",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: 20,
        color: 'white',
        fontWeight: '700',
    },
    contact: {
        display: 'flex',
        width: 360,
        height: 100,
        marginLeft: 20,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    socialContainer: {
        margin: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    social: {
        width: 150,
        height: 100,
        marginLeft: 5,
    },
    socialIcon: {
        width: 30,
    },
    payment: {
        width: 150,
        height: 100,
        marginRight: 5,
    },
    creditCardContainer: {
        margin: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    creditCard: {
        width: 30,
    }
});