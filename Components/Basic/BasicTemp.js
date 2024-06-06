import style from "./BasicTemp.Style.js"
import TXT from "../Txt/TXT.js"
import { View,Image } from "react-native"
export default function BasicTemp() {
    return (
        <>
        <View style={style.basicTemp_container}>
            <View style={style.city}>
                <TXT style={style.city_text}>city</TXT>
            </View>
            <View style={style.clock}>
                <TXT style={style.clock_text}>clock</TXT>
            </View>
            <View style={style.interpretation}>
                <TXT style={style.interpretation_text}>Sunny</TXT>
            </View>
            <View style={style.temperature}>
                <TXT style={style.temperature_text}>
                    33
                </TXT>
                <Image style={style.temperature_image} />
            </View>
            </View>
        </>
    )
}