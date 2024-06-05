import { Text, View } from "react-native"
import style from "./Home.Style.js"
export default function Home() {
    return (
        <>
            <View style={style.basic}>
                <Text>Basic Info</Text>
            </View>
            <View style={style.temperature}>
                <Text>Basic Info</Text>
            </View>
            <View style={style.advanced}>
                <Text>Basic Info</Text>
            </View>
        </>
    )
}