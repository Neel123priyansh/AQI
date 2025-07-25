import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const Header = () => {
  return (
    <View className="flex-row mt-20 items-center justify-between px-6 py-4">
        <AntDesign name="arrowleft" size={28} color="white" />
        <Feather name="bell" size={28} color="white" />  
    </View> 
  )
}

export default Header
