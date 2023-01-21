import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetailsInfo from './MealDetailsInfo';

export default function MealItem({ item }) {
  const image = { uri: item.imageUrl };
  const navigate = useNavigation();

  return (
    <View style={s.mealItem}>
      <Pressable
        onPress={() =>
          navigate.navigate('MealDetail', {
            item,
          })
        }
        style={({ pressed }) =>
          pressed ? [s.innerContainer, s.pressed] : s.innerContainer
        }>
        <View>
          <Image style={s.image} source={image} />
          <Text style={s.title}>{item.title}</Text>
        </View>
        <MealDetailsInfo item={item} />
      </Pressable>
    </View>
  );
}
const s = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    width: '100%',
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
});
