import { StyleSheet} from 'react-native';

const estiloSobre = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    borda: {
        backgroundColor: '#1C1C1C',
        width: '80%',
        height: '50%',
        borderRadius: 10,
    },

    texto02: {
        fontSize: 20,
        color: '#f51818',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    texto01: {
        fontSize: 25,
        color: '#f51818',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

  
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#f51818',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#f51818',
        fontWeight:'bold'
    },
});
export default estiloSobre;