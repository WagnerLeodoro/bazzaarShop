import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        height: 130,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
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
        textAlign: 'justify',
        lineHeight: 20,
        color: 'black',
        fontWeight: '500'
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto',
        textAlign: 'justify',
        lineHeight: 20,
        color: 'black',
        fontWeight: '500',
    }
});