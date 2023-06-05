import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Button,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import homeImg from '../assets/images/homeScreen/pic.png';

import Heart from '../assets/images/card/heart.png';
import HeartFill from '../assets/images/card/heart-fill.png';
import p1 from '../assets/images/young-beautiful-smiling-female/1.png';
import p2 from '../assets/images/young-beautiful-smiling-female/2.png';
import p3 from '../assets/images/young-beautiful-smiling-female/3.png';
import p4 from '../assets/images/young-beautiful-smiling-female/4.png';
import {Rating} from 'react-native-ratings';
import {moderateScale} from 'react-native-size-matters';
import CustomBtn from '../components/Custom/CustomBtn';
import BestCollectionImg from '../assets/images/homeScreen/Frame686556095.png';
import border from '../assets/images/homeScreen/boder.png';
import {productImg} from '../utils/Images';

const HomeScreen = () => {
  const DATA = [
    {
      id: '1',
      title: 'First Item',
      image: 'url(images/',
      price: '3000',
      rating: '5',
      like: false,
      new: true,
    },
    {
      id: '2',
      title: 'Secound Item',
      image: 'url(images/',
      price: '3000',
      rating: '5',
      like: true,
      new: false,
    },
    {
      id: '3',
      title: 'Third Item',
      image: 'url(images/',
      price: '3000',
      rating: '5',
      like: false,
      new: false,
    },
    {
      id: '4',
      title: 'Fourth Item',
      image: 'url(images/',
      price: '3000',
      rating: '5',
      like: true,
      new: true,
    },
  ];

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

  const [data, setData] = useState(DATA);
  const [productData, setProductData] = useState(PRODUCTDATA);

  const favrouiteHandler = i => {
    let temp = [...data];
    temp[i].like = !temp[i].like;
    setData(temp);
  };
  const favrouiteHandlerProduct = i => {
    let temp = [...productData];
    temp[i].like = !temp[i].like;
    setProductData(temp);
  };

  return (
    <SafeAreaView className="bg-whitec flex-1">
      <View>
        <Header />
        <ScrollView className="">
          <View className="self-center w-screen  mb-12">
            <Image
              resizeMode="contain"
              className="my-3 rounded-lg w-[95%] self-center h-[200] object-contain"
              source={homeImg}
            />
            <View className="items-center">
              <Text className="	 text-3xl text-atext font-semibold text-center my-2  ">
                New Arrival
              </Text>
              <Image className=" w-[45%] h-3 -mt-3" source={border} />
            </View>

            <View className="mx-12 my-3 flex-row justify-between">
              <TouchableOpacity onPress={() => console.log('kjdsfhsdkfjh')}>
                <Text className="text-stext">All</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('kjdsfhsdsskfjh')}>
                <Text className="text-stext">Apparel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log('kjdsfhsdsskfjh')}>
                <Text className="text-stext">Tshirt</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('kjdsfhsdkfjh')}>
                <Text className="text-stext">Dress</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log('kjdsfhsdddkfjh')}>
                <Text className="text-stext">Bag</Text>
              </TouchableOpacity>
            </View>

            {
              <FlatList
                data={data}
                className="mx-4"
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <View className="border border-gray-100 w-[50%] ">
                      {item.new && (
                        <View className="absolute z-20 bg-theme p-2 right-0">
                          <Text className="text-whitec ">New</Text>
                        </View>
                      )}
                      <Image className="w-[166px] h-[200px]" source={p1} />
                      <View className="p-2">
                        <View className="flex-row justify-between items-center">
                          <View className="flex-row">
                            <Rating
                              type="custom"
                              // ratingImage={WATER_IMAGE}
                              ratingColor="#FF9529"
                              ratingBackgroundColor="gray"
                              ratingCount={5}
                              // imageSize={5}
                              // starContainerStyle={he}
                              size={6}
                              imageSize={moderateScale(14)}
                              onFinishRating={this.ratingCompleted}
                              style={{paddingVertical: 10}}
                            />
                          </View>
                          <TouchableOpacity
                            onPress={() => favrouiteHandler(index)}>
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
                        <Text className="">{item.title}</Text>
                        <Text className="">Cardiganuuuu</Text>
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
                  );
                }}
              />
            }
            <View className="mx-4 my-4">
              <CustomBtn name={'Explore More'} />
            </View>
            <View>
              <Image
                resizeMode="contain"
                className="  w-[100%] "
                source={BestCollectionImg}
              />
            </View>
            <View>
              <Text className="text-lg text-ptext text-center my-2 font-SemiBold ">
                Product You Might Like
              </Text>
            </View>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
