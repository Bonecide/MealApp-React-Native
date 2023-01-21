import { Pressable, View, StyleSheet, Platform, Text } from "react-native";

export default function CategoryGridTile({title,color,onPress}) {

    return(
        <View style={[s.gridItem]}>
            <Pressable
            onPress={onPress}
            style={({pressed}) => pressed ? [s.button,s.buttonPressed] : s.button }>
                <View style={[s.innerContainer,{backgroundColor : color}]}>
                    <Text style={s.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>

    )
}
const s = StyleSheet.create({
    gridItem : {
        flex: 1,
        margin : 16,
        height : 150,
        borderRadius : 8,
        elevation : 4,
        backgroundColor : 'white',
        shadowColor : 'black',
        shadowOpacity : 0.5,
        shadowOffset : {width : 0, height:2},
        shadowRadius : 8,
        overflow : Platform.OS === 'android'? "hidden" : 'visible'

    },
    button : {
        flex : 1,

    },  
    buttonPressed : {
    opacity : 0.5,
    },
    innerContainer : {
        flex : 1,
        padding : 16,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 8,

    },
    title : {
        fontWeight : 'bold',
        fontSize : 18,

    }
})