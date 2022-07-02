import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    text: {
        margin: 5,
        fontSize: 18,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: 20,
        color: 'white',
        fontWeight: '700',
    },
    payment: {
        flex: 1,
        marginRight: 5,
    },
    creditCardContainer: {
        margin: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    creditCard: {
        width: 45,
    }
});