import { Button, StyleSheet, Text, View } from 'react-native';

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text style={{fontWeight: "900",color: "white"}}>Bienvenido a mi tienda, soy Brandon</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeNav');
            }}
        />
        <Text style={{fontWeight: "100",color: "yellow"}}>Tomate</Text>
        <Text style={{fontWeight: "500",color: "red"}}>Lechuja</Text>
        <Text style={{fontWeight: "bold", color: "green"}}>Naranjas</Text>
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });