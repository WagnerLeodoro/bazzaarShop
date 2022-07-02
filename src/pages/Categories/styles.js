import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        alignItems: 'flex-start',
    },
    titleContainer: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontFamily: 'Roboto',
        lineHeight: 20,
        color: 'black',
        fontWeight: '500'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    },
    line: {
        flex: 1,
        width: 360,
        marginTop: 10,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#F2B749',
        shadowOffset: { width: 4, height: 2 },
        elevation: 5,
    },
    text: {
        fontSize: 18,
        fontFamily: 'Roboto',
        lineHeight: 20,
        color: 'black',
    }
});