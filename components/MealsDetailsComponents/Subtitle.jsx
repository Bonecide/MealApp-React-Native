import { Text, View, StyleSheet } from 'react-native';

export default function Subtitle({ children }) {
  return (
    <View style={s.subTitleContainer}>
      <Text style={s.subTitle}>{children}</Text>
    </View>
  );
}
const s = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      subTitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
      },
})
