import { Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import { View } from 'react-native';

export default function FavoritesScreen() {

     const favoriteMealdIds = useSelector((s) => s.favorites.FavoriteMeals)

     const favoritesMeals = MEALS.filter((meals) => {
          return favoriteMealdIds.includes(meals.id)
     })
     if (favoritesMeals.length === 0) {
          return (
            <View style={styles.rootContainer}>
              <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
          );
        }
      
        return <MealsList items={favoritesMeals} />;
      
}

const styles = StyleSheet.create({
     rootContainer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     text: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white',
     },
   });