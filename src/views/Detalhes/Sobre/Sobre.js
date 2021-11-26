import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloResumo from './estiloDetalhes';

function Sobre() {

    return(

        <View style={estiloResumo.container}>
            <View style={estiloResumo.borda}>
                 
            <Text style={estiloResumo.texto01}> Sociedade dos poetas mortos </Text>
          
<Text style={estiloResumo.texto02}> Você deseja voltar para a tela de início? Aperte no botão abaixo! </Text>

                <TouchableOpacity style={estiloResumo.botaoContainer}>
                   <Text style={estiloResumo.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default Sobre;