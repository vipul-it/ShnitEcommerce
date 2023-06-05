import {View, Text, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import {productImg, iconConst} from '../../utils/Images';
import CustomBtn from '../../components/Custom/CustomBtn';
import border from '../../assets/images/homeScreen/boder.png';
import Heart from '../../assets/images/card/heart.png';
import HeartFill from '../../assets/images/card/heart-fill.png';

const ProductDetails = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const PRODUCTDATA = [
    {
      id: '1',
      title: 'Product 1',
      discription: 'Product 1 Description',
      price: '120',
      like: false,
    },
    {
      id: '2',
      title: 'Product 1',
      discription: 'Product 1 Description',
      price: '120',
      like: false,
    },
    {
      id: '3',
      title: 'Product 1',
      discription: 'Product 1 Description',
      price: '120',
      like: false,
    },
    {
      id: '4',
      title: 'Product 1',
      discription: 'Product 1 Description',
      price: '120',
      like: false,
    },
    {
      id: '5',
      title: 'Product 1',
      discription: 'Product 1 Description',
      price: '120',
      like: false,
    },
    {
      id: '6',
      title: 'Product 1',
      discription: 'Product 1 Description',
      price: '120',
      like: false,
    },
  ];

  const [productData, setProductData] = useState(PRODUCTDATA);

  const favrouiteHandlerProduct = i => {
    let temp = [...productData];
    temp[i].like = !temp[i].like;
    setProductData(temp);
  };
  return (
    <View>
      <ScrollView>
        <View className="mx-4 flex-1">
          <View className="-mt-12">
            <Image
              className="w-[100%] h-[500px]"
              source={productImg.CartProduct}
            />
          </View>
          <View className="my-2">
            <Text className="font-Bold">T-Shirt</Text>
            <Text>Recycle Boucle Knit Cardigan Pink</Text>
            <Text className="font-bold text-theme my-1">
              {'\u20B9'}
              3999
            </Text>
            <View className="flex-row gap-1">
              <Text className="text-center ">Size </Text>
              <Text className="border-[1px] border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                S
              </Text>
              <Text className="border-[1px] border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                M
              </Text>
              <Text className="border-[1px] border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                L
              </Text>
            </View>
          </View>
          <CustomBtn name="+  Add To Bag" />
          <Text className="text-center my-3 tracking-[4px]">Gallery</Text>
          <View className="">
            <Image
              className="mb-3 w-[100%] h-[165px]"
              source={productImg.CartProduct16}
            />
            <Image
              className="mb-3 w-[100%] h-[340px]"
              source={productImg.CartProduct17}
            />
            <Image
              className="mb-3 w-[100%] h-[255px]"
              source={productImg.CartProduct18}
            />
          </View>
          <Text className="my-2 tracking-[4px] font-bold text-stext">Care</Text>
          <View className="my-1">
            {/* Colapse heading */}
            <Collapse>
              <CollapseHeader touchableOpacityProps={toggleCollapse}>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <Image className="w-5 h-5" source={iconConst.Truck} />
                    <Text className="font-Normal text-[16px]">
                      Free Flat Rate Shipping
                    </Text>
                  </View>
                  {/* <Image className="w-5 h-5" source={iconConst.BottomForword} /> */}
                  {collapsed ? (
                    <Image
                      className="w-5 h-5"
                      source={iconConst.BottomForword}
                    />
                  ) : (
                    <Image className="w-5 h-5" source={iconConst.TopForword} />
                  )}
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View className="ml-[12%] mb-2">
                  <Text>Estimated to be delivered on</Text>
                  <Text>09/11/2021 - 12/11/2021.</Text>
                </View>
              </CollapseBody>
            </Collapse>
            <Text className="border-b-[0.5px] mb-1 ml-[8%] -mt-4 border-btext w-[85%] "></Text>
          </View>
          <View className="my-1">
            {/* Colapse heading */}
            <Collapse>
              <CollapseHeader touchableOpacityProps={toggleCollapse}>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <Image className="w-5 h-5" source={iconConst.Tag} />
                    <Text className="font-Normal text-[16px]">COD Policy</Text>
                  </View>
                  {/* <Image className="w-5 h-5" source={iconConst.BottomForword} /> */}
                  {collapsed ? (
                    <Image
                      className="w-5 h-5"
                      source={iconConst.BottomForword}
                    />
                  ) : (
                    <Image className="w- h-5" source={iconConst.TopForword} />
                  )}
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View className="ml-[12%] mb-2">
                  <Text>Empty Data</Text>
                </View>
              </CollapseBody>
            </Collapse>
            <Text className="border-b-[0.5px] mb-1 ml-[8%] -mt-4 border-btext w-[85%] "></Text>
          </View>
          <View className="my-1">
            {/* Colapse heading */}
            <Collapse>
              <CollapseHeader touchableOpacityProps={toggleCollapse}>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <Image className="w-5 h-5" source={iconConst.Refresh} />
                    <Text className="font-Normal text-[16px]">
                      Return Policy
                    </Text>
                  </View>
                  {/* <Image className="w-5 h-5" source={iconConst.BottomForword} /> */}
                  {collapsed ? (
                    <Image
                      className="w-5 h-5"
                      source={iconConst.BottomForword}
                    />
                  ) : (
                    <Image className="w-5 h-5" source={iconConst.TopForword} />
                  )}
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View className="ml-[12%] mb-2">
                  <Text>Empty Data</Text>
                </View>
              </CollapseBody>
            </Collapse>
            <Text className="border-b-[0.5px] mb-1 ml-[8%] -mt-4 border-btext w-[85%] "></Text>
          </View>
        </View>
        <View className="items-center mt-8">
          <Text className="text-xl font-Light text-ptext text-center my-2">
            You may also like
          </Text>
          <Image className=" w-[40%] h-3 -mt-1" source={border} />
        </View>
        <View>
          {
            <FlatList
            data={productData}
            className="mx-4 p-2"
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View className="border-2 border-gray-100 w-[50%] ">
                  <Image
                    className="w-[166px] h-[200px]"
                    source={productImg.Product1}
                  />
                  <View className="p-2">
                    <View className="flex-row justify-end items-center -mt-8">
                      <TouchableOpacity
                        onPress={() => favrouiteHandlerProduct(index)}>
                        {/* <Image className="w-[14.6px] h-[13px]" source={Heart} 
                      style={{tintColor:item.like?'green':'gray'}} /> */}
                        {item.like ? (
                          // <HeartIcon fill="#1AAABC" />
                          <Image
                            className="w-[20px] h-[18px]"
                            source={HeartFill}
                          />
                        ) : (
                          <Image
                            className="w-[20px] h-[18px]"
                            source={Heart}
                          />
                          // <HeartIcon fill="gray" />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View className="py-3">
                      <Text className="">{item.title}</Text>
                      <Text className="">{item.discription}</Text>
                      <View className="flex-row items-center gap-2">
                        <Text className="font-bold">
                          {'\u20B9'}
                          {item.price}{' '}
                        </Text>
                        <Text className="text-theme text-[8px] font-Normal">
                          50% OFF
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
