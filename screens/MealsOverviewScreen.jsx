import { Text, View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useRoute, useNavigation } from '@react-navigation/native';
import MealItem from '../components/MealItem';
import { CATEGORIES } from './../data/dummy-data';
import { useEffect } from 'react';
import MealsList from '../components/MealsList';
export default function MealsOverviewScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(id) >= 0,
  );

  useEffect(() => {
    const CategoryTitle = CATEGORIES.find((item) => item.id === id).title;
    navigation.setOptions({
      title: CategoryTitle,
    });
  }, [id, navigation]);
  return (
    <MealsList items={displayedMeals}/>
  );
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
