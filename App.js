import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Contacts } from './app/screens/ContactsScreen';
import { Home } from './app/screens/HomeScreen';
import { Product } from './app/screens/Product';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='WelcomBrandon' component={Home} />
        <Stack.Screen name='CallNumber' component={Contacts} />
        <Stack.Screen name='PhoneNumberNav' component={Contacts} />
        <Stack.Screen name='ProductNavigation' component={Product}/>


      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
