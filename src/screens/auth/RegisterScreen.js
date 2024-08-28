import { Image, Text, TextInput, View } from "react-native"
import AuthGoBack from "../../commonComponents/AuthGoback"
import { CommonStyle } from "../../constantAsserts/CommonStyles"
import Images from "../../constantAsserts/Images"
import { percentagewidth } from "../../constantAsserts/Dimensions"

const RegisterScreen = () => {
    return (
        <View style={CommonStyle.container1}>
            <View style={[CommonStyle.container2]}>
                <AuthGoBack />
                <View>
                    <Text style={CommonStyle.head_one}>Wise Talent</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={CommonStyle.head_two}>Registration</Text>
                        <Text>   </Text>
                        <Image style={{ alignSelf: 'center' }} source={Images.like_icon}></Image>
                    </View>
                    <Text style={CommonStyle.head_three}>Let’s Register. Apply to Jobs!</Text>
                  
                </View>
                <View style={[CommonStyle.input_field,{flexDirection:'row',marginTop:percentagewidth(4)}]}>
                    <View style={{alignSelf:'center',padding:percentagewidth(3)}} >
                    <Image source={Images.profile_icon}></Image>
                    </View>
                    <TextInput placeholder="Full Name"></TextInput>
                </View>
                <View style={[CommonStyle.input_field,{flexDirection:'row',marginTop:percentagewidth(4)}]}>
                    <View style={{alignSelf:'center',padding:percentagewidth(3)}} >
                    <Image source={Images.profile_icon}></Image>
                    </View>
                    <TextInput placeholder="Mobile No or E-Mail"></TextInput>
                </View>
                <View style={[CommonStyle.input_field,{flexDirection:'row',marginTop:percentagewidth(4)}]}>
                    <View style={{alignSelf:'center',padding:percentagewidth(3)}} >
                    <Image source={Images.profile_icon}></Image>
                    </View>
                    <TextInput placeholder="Password"></TextInput>
                </View>
                <View style={[CommonStyle.input_field,{flexDirection:'row',marginTop:percentagewidth(4)}]}>
                    <View style={{alignSelf:'center',padding:percentagewidth(3)}} >
                    <Image source={Images.profile_icon}></Image>
                    </View>
                    <TextInput placeholder="Confirm Password"></TextInput>
                </View>
            </View>


        </View>
    )
}
export default RegisterScreen