import { Image, ImageBackground, Text, View } from "react-native";
import { CommonStyle } from "../../constantAsserts/CommonStyles";
import Images from "../../constantAsserts/Images";
import { percentageheight, percentagewidth } from "../../constantAsserts/Dimensions";

const SplashScreen = () => {
  return (
    <View style={CommonStyle.container1}>
      <ImageBackground style={{ flex: 1 }} resizeMode='stretch' source={Images.splash_screen_top}></ImageBackground>
      <View style={{ flex: 1 }}>
        <Image style={{ alignSelf: 'center' }} source={Images.logo}></Image>
      </View>
      <ImageBackground style={{ flex: 1 }} resizeMode='stretch' source={Images.splash_screen_bottom}></ImageBackground>
    </View>
  )
}
export default SplashScreen;