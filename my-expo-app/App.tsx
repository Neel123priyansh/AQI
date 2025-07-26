import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Header from 'components/header';

import './global.css'; // for NativeWind

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-green-400">
      <StatusBar style="light" />
      {/* Profile */}
      {/* <View className="items-center mb-4">
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} 
          className="w-20 h-20 rounded-full border-4 border-white"
        />
        <Text className="text-white text-xl font-semibold mt-2">
          Edria Salsa
        </Text>
      </View> */}
      {/* AQI Card */}  
      <View className="bg-white mx-6 my-[2rem] rounded-3xl p-6">
        <Text className="text-gray-800 font-semibold mb-2">
          📍 Jakarta, Indonesia
        </Text>
        <Text className="text-2xl font-bold text-red-500 mb-4">
          Unhealthy
        </Text>
        <View className="flex-row justify-around mb-4"> 
          <View className="items-center">  
            <Text className="text-3xl font-bold text-red-500">160</Text>
            <Text className="text-sm text-gray-600">AQI</Text>
          </View>   
          <View className="items-center">
            <Text className="text-3xl font-bold text-red-500">73</Text>
            <Text className="text-sm text-gray-600">PM2.5</Text>
          </View>
        </View>
        <View className="flex-row items-center mb-2">
          <Text className="ml-2 text-red-500 font-medium">  
            Keep windows closed for cleaner indoor air
          </Text>
        </View>  
        <Text className="text-center text-red-500 mt-2 font-bold"> 
          Wear a mask if you are outside
        </Text>
        {/* Health Recommendations */}  
        <View className="flex-row justify-around mt-6">
          <View className="items-center">
            <Text className="mt-1 text-xs text-gray-600">Mask</Text>
          </View>
          <View className="items-center">
            <Text className="mt-1 text-xs text-gray-600">Jog</Text>
          </View>
          <View className="items-center">
            <Text className="mt-1 text-xs text-gray-600">Indoor</Text>
          </View>
          <View className="items-center">
            <Text className="mt-1 text-xs text-gray-600">Purifier</Text>
          </View>
        </View>
      </View>
      {/* Graph Tabs */}
      <View className="flex-row justify-center mt-6">
        <Pressable className="bg-green-600 px-4 py-2 rounded-full mr-2">
          <Text className="text-white text-sm">AQI Past 24 hours</Text>
        </Pressable>
        <Pressable className="bg-gray-200 px-4 py-2 rounded-full">
          <Text className="text-gray-800 text-sm">AQI Daily Averages</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}