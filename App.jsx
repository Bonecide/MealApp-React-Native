import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDeatail from './components/MealDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from './screens/FavoritesScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
const Stack = createNativeStackNavigator();
const Draw = createDrawerNavigator();

const DrawerNavigation = () => {
     return (
          <Draw.Navigator
               screenOptions={{
                    headerStyle: { backgroundColor: '#351401' },
                    headerTintColor: 'white',
                    sceneContainerStyle: { backgroundColor: '#3f2f25' },
                    drawerContentStyle: { backgroundColor: '#351401' },
                    drawerInactiveTintColor: 'white',
                    drawerActiveTintColor: '#351401',
                    drawerActiveBackgroundColor: '#e4baa1',
               }}>
               <Draw.Screen
                    component={CategoriesScreen}
                    name='Categories'
                    options={{
                         title: 'All Categories',
                         drawerIcon: ({ color, size }) => (
                              <Ionicons name='list' color={color} size={size} />
                         ),
                    }}
               />
               <Draw.Screen
                    component={FavoritesScreen}
                    name='Favorite'
                    options={{
                         title: 'Favorite',
                         drawerIcon: ({ color, size }) => (
                              <Ionicons name='star' color={color} size={size} />
                         ),
                    }}
               />
          </Draw.Navigator>
     );
};
export default function App() {
     return (
          <>
               <StatusBar hidden />
               <Provider store={store}>
                    <NavigationContainer>
                         <Stack.Navigator
                              screenOptions={{
                                   headerStyle: { backgroundColor: '#351401' },
                                   headerTintColor: 'white',
                                   contentStyle: { backgroundColor: '#3f2f25' },
                              }}>
                              <Stack.Screen
                                   name='Drawer'
                                   component={DrawerNavigation}
                                   options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                   name='MealsOverview'
                                   component={MealsOverviewScreen}
                              />
                              <Stack.Screen
                                   name='MealDetail'
                                   component={MealDeatail}
                              />
                         </Stack.Navigator>
                    </NavigationContainer>
               </Provider>
          </>
     );
}

const s = StyleSheet.create({
     container: {},
});
