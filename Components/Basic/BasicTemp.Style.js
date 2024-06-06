import { StyleSheet } from "react-native";

const style = StyleSheet.create({
city:{
},
clock:{
alignItems:"flex-end",
},
interpretation:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"baseline",
},
interpretation_text:{
    transform:[{rotate:"-90deg"}],
    fontSize:20,
},
temperature_text:{
    fontSize:100,
},
temperature_image:{
    width:"50",
    height:"50",
    backgroundColor:"white"
}
})

export default style;