import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MealDetailsInfo from './MealDetailsInfo';
import Subtitle from './MealsDetailsComponents/Subtitle';
import List from './MealsDetailsComponents/List';
import IconButton from './IconButton';
import {
     addFavorite,
     deleteFavorite,
} from '../store/slices/FavoriteMealsSlice';
export default function MealDeatail() {
     const navigate = useNavigation();
     const route = useRoute();
     const item = route.params.item;
     const dispatch = useDispatch();
     const favoriteMealIds = useSelector(
          (state) => state.favorites.FavoriteMeals,
     );
     const mealId = item.id;
     const mealIsFavorite = favoriteMealIds.includes(mealId);
     const changeFavoriteStatusHandler = () => {
          if (mealIsFavorite) {
               dispatch(deleteFavorite(mealId));
          } else {
               dispatch(addFavorite(mealId));
          }
     };
     useEffect(() => {
          navigate.setOptions({
               title: item.title,
               headerRight: () => {
                    return (
                         <IconButton
                              onPress={changeFavoriteStatusHandler}
                              icon={'star'}
                              color={mealIsFavorite ? 'yellow' : 'white'}
                         />
                    );
               },
          });
     }, [favoriteMealIds]);

     const image = { uri: item.imageUrl };
     return (
          <ScrollView style={s.root}>
               <Image style={s.image} source={image} />
               <Text style={s.title}>{item.title}</Text>
               <MealDetailsInfo textStyle={s.detailText} item={item} />
               <View style={s.listOuterContainer}>
                    <View style={s.listContainer}>
                         <Subtitle>Ingredients</Subtitle>
                         <List list={item.ingredients} />
                         <Subtitle>Steps</Subtitle>
                         <List list={item.steps} />
                    </View>
               </View>
          </ScrollView>
     );
}
const s = StyleSheet.create({
     root: {
          marginBottom: 24,
     },
     image: {
          width: '100%',
          height: 350,
     },
     title: {
          fontWeight: 'bold',
          fontSize: 25,
          margin: 8,
          textAlign: 'center',
          color: 'white',
     },
     detailText: {
          color: 'white',
     },
     listContainer: {
          maxWidth: '80%',
     },
     listOuterContainer: {
          alignItems: 'center',
     },
});
