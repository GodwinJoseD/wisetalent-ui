import { StyleSheet } from "react-native";
import { percentagewidth } from "./Dimensions";
import { Colors } from "./Colors";
import { Fonts } from "./Fonts";
import { FontSize } from "./FontsSize";

export const CommonStyle=StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    container2:{
        flex:1,
        margin:percentagewidth(4),
    },
    head_one:{
       fontFamily:Fonts.black,
       fontSize:FontSize[18],
       color:Colors.btn_clr_blue,
       marginTop:percentagewidth(5)
    },
    head_two:{
        fontFamily:Fonts.black,
        fontSize:FontSize[20],
        color:'black',
        marginTop:percentagewidth(2)


    },
    head_three:{
        fontFamily:Fonts.semi_bold,
        fontSize:FontSize[14],
        color:Colors.grey_clr,
        marginTop:percentagewidth(2)


    },
    input_field:{
        borderWidth:1,
        borderColor:Colors.grey_clr,
        borderRadius:percentagewidth(2)
    }
})