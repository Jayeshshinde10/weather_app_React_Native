import { Text, View } from "react-native"
import style from "./Home.Style.js"
import BasicTemp from "../../Components/Basic/BasicTemp.js"
export default function Home() {
    return (
        <>
          <BasicTemp></BasicTemp> 
          <view style={{flex:2}}></view>
          <view style={{flex:1}}></view>
        </>
    )
}