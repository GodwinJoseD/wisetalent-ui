import { Image, Text, TouchableOpacity, View } from "react-native";
import { CommonStyle } from "../../constantAsserts/CommonStyles";
import Images from "../../constantAsserts/Images";
import { Colors } from "../../constantAsserts/Colors";
import LinearGradient from "react-native-linear-gradient";
import { Fonts } from "../../constantAsserts/Fonts";
import { FontSize } from "../../constantAsserts/FontsSize";
import { percentagewidth } from "../../constantAsserts/Dimensions";

const WelcomeScreen = () => {
   return (
      <LinearGradient style={{ flex: 1 }} colors={[Colors.sky_blue, Colors.white]}>
         <View style={{ flex: 3, justifyContent: 'center' }}>
            <Image style={{ alignSelf: 'center' }} source={Images.welcome}></Image>
         </View>
         <View style={{ flex: 1, margin: percentagewidth(4) }}>
            <Text style={{ color: Colors.text_clr1, fontFamily: Fonts.bold, fontSize: FontSize[25], alignSelf: 'center' }}>Welcome</Text>
            <Text style={{
               color: Colors.text_clr2, fontFamily: Fonts.medium, fontSize: FontSize[14],
               alignSelf: 'center', textAlign: 'center', marginTop: percentagewidth(5)
            }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it </Text>

         </View>
         <View style={{ flex: 1, margin: percentagewidth(4), justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
               <TouchableOpacity style={{ flex: 1, backgroundColor: Colors.btn_clr_blue, borderRadius: 5, padding: percentagewidth(3) }}>
                  <Text style={{ alignSelf: 'center', fontFamily: Fonts.bold, fontSize: FontSize[14], color: Colors.white }}>SignIn</Text>
               </TouchableOpacity>
               <Text>      </Text>
               <TouchableOpacity style={{ flex: 1, borderColor: Colors.btn_clr_blue, borderWidth: 2, borderRadius: 5, padding: percentagewidth(3) }}>
                  <Text style={{ alignSelf: 'center', fontFamily: Fonts.bold, fontSize: FontSize[14], color: Colors.btn_clr_blue }}>Signup</Text>
               </TouchableOpacity>
            </View>
         </View>
      </LinearGradient>
   )
}
export default WelcomeScreen;