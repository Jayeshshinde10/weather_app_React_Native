import { Text, View } from "react-native"
import style from "./Home.Style.js"
import BasicTemp from "../../Components/Basic/BasicTemp.js"
export default function Home() {
    return (
        <>
          <BasicTemp></BasicTemp> 
          <View style={{flex:2}}></View>
          <View style={{flex:1}}></View>
        </>
    )
}