import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({name,onPress}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    className="w-[100%] bg-theme py-3 items-center rounded-lg">
        <Text className="font-semiBold text-white text-base">{name}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn