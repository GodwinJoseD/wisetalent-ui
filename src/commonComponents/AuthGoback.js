import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Images from '../constantAsserts/Images'
import { percentagewidth } from '../constantAsserts/Dimensions'

const AuthGoBack = ({ navigation, navigateTo }) => {
    return (
        <View >
            <View style={styles.parent_container} >
                <TouchableOpacity onPress={() => {
                    navigateTo != '' ? navigation.navigate(navigateTo) : navigation.GoBack()
                }} >
                    <Image style={styles.back_icon} source={Images.back_icon} />
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default AuthGoBack;

const styles = StyleSheet.create({
    parent_container: {

        flexDirection: "row",
    
    },
    back_icon: {
        width: percentagewidth(4),
        height: percentagewidth(4),
        resizeMode: 'contain'
    }
})