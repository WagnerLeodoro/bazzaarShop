import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        display: 'flex',
        width: 126,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#0e0e0e',
        shadowOffset: { width: 4, height: 2 },
        elevation: 5
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        textAlign: 'center'
    }
});