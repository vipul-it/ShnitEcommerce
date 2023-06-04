import AsyncStorage from "@react-native-async-storage/async-storage"

export const getData=async(key)=>{
    try {
        let response=await AsyncStorage.getItem(key)
        return JSON.parse(response)   
    } catch (error) {
        console.log(error); 
    }
}

export const setData=async(key,data)=>{
    try {
        await AsyncStorage.setItem(key,JSON.stringify(data))
    } catch (error) {
        console.log(error); 
    }
}

export const removeAllKeys=async()=>{
    try {
        const keys=await AsyncStorage.getAllKeys()
        await multiRemove(keys)
    } catch (error) {
        console.log(error,'0');
    }
}