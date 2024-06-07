import style from "./Txt.Style"
import { Text } from "react-native"
export default function TXT({children,style,...evnets}){
    return(
        <>
        <Text style={[style.TXT,style]} {...evnets}>{children}</Text>
        </>
    )
}
