import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 360,
        height: 150,
        marginLeft: 20,
        marginBottom: 30,
        alignItems: 'center',
    },
    titleContainer: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: 'Roboto',
        lineHeight: 20,
        color: 'black',
        fontWeight: '500'
    },
    textContainer: {
        display: 'flex',
        width: 360,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: 20,
        color: 'black',
        fontWeight: '500'
    },
    image: {
        marginTop: 10,
        height: 180,
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialContainer: {
        margin: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    social: {
        width: 150,
        marginLeft: 5,
    },
    socialIcon: {
        width: 30,
    },
});