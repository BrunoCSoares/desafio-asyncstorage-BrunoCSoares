// Importando os módulos necessários do react native
import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

// Define a interface para as propriedades da tela restrita
interface RestrictedScreenProps {
    navigation : any;
}

// Define a tela restrita do aplicativo
const RestrictedScreen: React.FC<RestrictedScreenProps> = ({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>Você pode acessar essa tela</Text>
            <Button title="Voltar" onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default RestrictedScreen;

// Define o estilo da tela
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
});