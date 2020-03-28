import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    heraderText: {
        fontSize: 15,
        color: '#737380',

    },

    heraderTextBold: {
        fontWeight: 'bold'
    },

    tile: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    } ,

    descricao: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentsList: {
        marginTop: 32,
    },

    Incidents: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
    },

    incidentsProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

    detailButtonArrow: {
        color: '#E02041',
    }
});