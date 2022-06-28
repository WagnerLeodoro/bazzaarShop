import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5
    },
    header: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    product: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productInfo: {
        marginLeft: 45,
        marginTop: 10,
        width: 320,
        height: 59,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e0e0e0e0'
    },
    price: {
        fontSize: 32,
        color: 'red',
        fontWeight: 'bold'
    },
    productDescription: {
        marginLeft: 45,
        marginTop: 10,
        marginBottom: 10,
        width: 320,
    },
    title: {
        marginBottom: 3,
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        color: 'black'
    },
    textContent: {
        fontFamily: 'Roboto-Regular',
        marginBottom: 5,
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'justify'
    }
});