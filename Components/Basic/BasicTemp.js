import style from "./BasicTemp.Style.js"
import TXT from "../Txt/TXT.js"
export default function BasicTemp() {
    return (
        <>
            <View style={style.city}>
                <TXT>city</TXT>
            </View>
            <View style={style.clock}>
                <TXT>clock</TXT>
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
        </>
    )
}