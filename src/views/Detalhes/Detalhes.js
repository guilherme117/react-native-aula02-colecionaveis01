import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhes';

function Detalhes() {
    return (
        
        <View style={estiloDetalhe.container}>
            <View style={estiloDetalhe.borda}>
            <Text style={estiloDetalhe.texto01}> Sinopse </Text>
                 <Text style={estiloDetalhe.texto}>O novo professor de Inglês John Keating é introduzido a uma escola preparatória de meninos que é conhecida por suas antigas tradições e alto padrão. 
                 Ele usa métodos pouco ortodoxos para atingir seus alunos, que enfrentam enormes pressões de seus pais e da escola. 
                 Com a ajuda de Keating, os alunos Neil Perry, Todd Anderson e outros aprendem como não serem tão tímidos, seguir seus sonhos e aproveitar cada dia.</Text>

            
             <Text style={estiloDetalhe.texto04}>Você deseja voltar para a tela de início? Aperte no botão abaixo!</Text>
<TouchableOpacity style={estiloDetalhe.botaoContainer}>
   <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default Detalhes;
