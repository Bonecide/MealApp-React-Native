import { Text, View,StyleSheet } from "react-native";

export default function List({list}) {

    return(
        list.map((info, idx) => (
            <View style={s.listItem} key={`StepN${idx}`}>
              <Text style={s.itemText}>{info}</Text>
            </View>
          ))
    )
}

const s = StyleSheet.create({
    listItem : {
        borderRadius : 6,
        paddingHorizontal :8,
        paddingVertical : 4,
        marginVertical : 4,
        marginHorizontal : 12,
        backgroundColor : '#e2b497',

    },
    itemText : {
        color : '#351401',
        textAlign : 'center',
    }
})