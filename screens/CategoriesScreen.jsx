import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from './../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {
  const renderItem = (item) => {
    const PressHadler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={item.item.title}
        color={item.item.color}
        onPress={PressHadler}
      />
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}
