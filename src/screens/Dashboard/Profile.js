import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { removeAllKeys, setData } from '../../utils/Common'
import { useDispatch } from 'react-redux'

const Profile = () => {
    const dispatch = useDispatch()
    const logoutHandler = async () => {
        dispatch({
            type: 'CHANGE_STACK',
            payload: null
        })
        let name = null
        await setData('StackName', name)
    }
    return (
        <SafeAreaView className="flex-1">
            <View>
                <TouchableOpacity
                    onPress={logoutHandler}
                    className="bg-red-200 p-3 w-[90%] self-center items-center mt-10 rounded-md">
                    <Text className="text-red-600">Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Profile