import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bannerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 20,
        width: 324,
        height: 180
    },
    image: {
        width: 380,
        height: 180,
        marginRight: 30,
        paddingRight: 20,
        resizeMode: 'cover'
    },
    dotsIndicator: {
        flexDirection: 'row',
        left: '50%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    dots: {
        fontSize: 12,
        color: '#888',
        margin: 3
    },
    activeDots: {
        ontSize: 12,
        color: '#fff',
        margin: 3
    }
});