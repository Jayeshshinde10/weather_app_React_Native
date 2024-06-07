import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    basicTemp_container: {
        flex: 2,
        padding: 15,
        backgroundColor: "yellow",
    },
    city: {},
    city_text: {
        fontSize: 30,
        color: "white"
    },

    clock: {
        alignItems: "space-between",
    },
    clock_text: {
        fontSize: 30,
        color: "white"
    },
    interpretation: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
    },
    interpretation_text: {
        transform: [{ rotate: "-90deg" }],
        fontSize: 20,
    },
    temperature_text: {
        fontSize: 100,
    },
    temperature_image: {
        width: "50",
        height: "50",
        backgroundColor: "white"
    },
    temeperature:{
        flexDirection:"row",
        alignItems:"base-line",
        justifyContent:"space-around"

    }
})

export default style;