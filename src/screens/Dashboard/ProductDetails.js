import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {productImg} from '../../utils/Images';
import CustomBtn from '../../components/Custom/CustomBtn';

const ProductDetails = () => {
  return (
    <View>
      <View className=" flex-1 bg-whitec mx-4">
        <ScrollView>
          <View className="my-1">
            <Image
              className="-mt-16 w-full h-[520px]"
              source={productImg.CartProduct}
            />
          </View>
          <View>
            <Text className="font-semibold">SHIRT</Text>
            <Text>Recycle Boucle Knit Cardigan white</Text>
            <Text className="font-bold text-theme my-1">
              {'\u20B9'}
              3999
            </Text>
            <View className="flex-row gap-1">
              <Text className="text-center ">Size </Text>
              <Text className="border-[1px] bg-theme text-whitec border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                S
              </Text>
              <Text className="border-[1px] border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                M
              </Text>
              <Text className="border-[1px] border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                L
              </Text>
            </View>
            <CustomBtn name="+  Add To Bag" />
            <Text className="text-center my-3 font-SemiBold text-md">
              Gallery
            </Text>
            <View className="my-2">
              <Image
                className=" w-full h-[147px]"
                source={productImg.CartProduct16}
              />
            </View>
            <View className="my-1">
              <Image
                className="w-full h-[303px]"
                source={productImg.CartProduct17}
              />
            </View>
            <View className="my-1">
              <Image
                className=" w-full h-[207px]"
                source={productImg.CartProduct18}
              />
            </View>
          </View>

          <View>
            <Text className="text-lg text-atext text-center my-2 font-SemiBold ">
              Product You Might Like
            </Text>
          </View>

          <Text></Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductDetails;
