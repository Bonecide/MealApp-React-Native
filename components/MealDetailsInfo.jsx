import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function MealDetailsInfo({item,style,textStyle}) {

  
  return (
    <View style={[s.details,style]}>
      <Text style={[s.detailsItem,textStyle]}>{item.duration}m</Text>
      <Text style={[s.detailsItem,textStyle]}>{item.complexity.toUpperCase()}</Text>
      <Text style={[s.detailsItem,textStyle]}>{item.affordability.toUpperCase()}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
