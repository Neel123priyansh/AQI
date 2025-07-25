import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className="flex-row items-center justify-between px-6 py-4">
        <AntDesign name="arrowleft" size={28} color="white" />
        <Feather name="bell" size={28} color="white" />  
    </View> 
  )
}

export default Header
