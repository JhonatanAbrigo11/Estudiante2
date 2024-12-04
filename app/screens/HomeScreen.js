import { Button, StyleSheet, Text, View } from 'react-native';

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi aplicacion, soy Jhonatan_Abrigo</Text>
        <Text>Al que madruga,Dios le ayuda</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    color="green"
                    title='CONTACTS'
                    onPress={() => {
                        navigation.navigate('PhoneNumberNav');
                    }}
                />
            </View>



            <Button
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNavigation');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        
    },
    boton1: {
        marginRight: 60,

    },
});
