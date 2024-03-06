import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screen/FoodOverviewScreen';
import FoodDetailScreen from './screen/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screen/FavoritesScreen';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import FavoriteContextProvider from './store/FavoritesContext';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Tüm Kategoriler',
          drawerIcon: () => (
            <Feather name="list" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favoriler',
          drawerIcon: () => (
            <AntDesign name="hearto" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoriteContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerTintColor: 'black',
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={{
              title: 'İçerik'
            }}
          />
        </Stack.Navigator>
      </FavoriteContextProvider>
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
