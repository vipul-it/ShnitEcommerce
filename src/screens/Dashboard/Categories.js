import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import S1 from '../../assets/images/w/w.png';
import Heart from '../../assets/images/card/heart.png';
import HeartFill from '../../assets/images/card/heart-fill.png';
import {CategoriesIcon, iconConst} from '../../utils/Images';
import {Rating} from 'react-native-ratings';

const Categories = ({navigation}) => {
  const PRODUCTDATA = [
    {
      id: '1',
      title: 'Lamerei',
      discription: 'Recycle Boucle Knit Cardigan Pink',
      image: 'url(images/',
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '2',
      title: 'Lamerei',
      discription: 'Recycle Boucle Knit Cardigan Pink',
      image: 'url(images/',
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '3',
      title: 'Lamerei',
      discription: 'Recycle Boucle Knit Cardigan Pink',
      image: 'url(images/',
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '4',
      title: 'Lamerei',
      discription: 'Recycle Boucle Knit Cardigan Pink',
      image: 'url(images/',
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '5',
      title: 'Lamerei',
      discription: 'Recycle Boucle Knit Cardigan Pink',
      image: 'url(images/',
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '6',
      title: 'Lamerei',
      discription: 'Recycle Boucle Knit Cardigan Pink',
      image: 'url(images/',
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '7',
      title: 'Lamerei',
      discription: 'Recycle Boucle Knit Cardigan Pink',
      image: 'url(images/',
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '8',
      title: 'Lamerei',
      discription: 'Recycle Boucle Knit Cardigan Pink',
      image: 'url(images/',
      price: '3999',
      rating: '4.8',
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
    <View className="bg-whitec flex-1">
      <View className="mx-8 mt-2 flex-row justify-between items-center">
        <Text className=" text-htext text-lg">4500 Apparel</Text>
        <View className="flex-row gap-1">
          <TouchableOpacity className="bg-gray-200 rounded-3xl w-16 h-8 items-center justify-center ">
            <View className="flex-row">
              <Text>New</Text>
              <Image
                source={CategoriesIcon.Down}
                resizeMode="contain"
                className="h-5 w-5"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 rounded-3xl w-8 h-8 items-center justify-center ">
            <Image
              source={CategoriesIcon.Category}
              resizeMode="contain"
              className="h-5 w-5"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 rounded-3xl w-8 h-8 items-center justify-center ">
            <Image
              source={CategoriesIcon.Filter}
              resizeMode="contain"
              className="h-5 w-5"
            />
          </TouchableOpacity>
        </View>
      </View>
      {
        <FlatList
          data={productData}
          className="mx-4 my-2 p-2"
          numColumns={1}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails')}>
                <View className="">
                  <View className="border-4 border-gray-50 w-[100%] flex-row">
                    <View>
                      <Image className="w-[100px] h-[142px]" source={S1} />
                      <TouchableOpacity
                        className="z-30 top-2 absolute right-2"
                        onPress={() => favrouiteHandlerProduct(index)}>
                        {item.like ? (
                          // <HeartIcon fill="#1AAABC" />
                          <Image
                            className="w-[15px] h-[13px]"
                            source={HeartFill}
                          />
                        ) : (
                          <Image className="w-[15px] h-[13px]" source={Heart} />
                          // <HeartIcon fill="gray" />
                        )}
                      </TouchableOpacity>
                    </View>

                    <View className="p-2">
                      <View className="py-3">
                        <Text className="font-bold">{item.title}</Text>
                        <Text className="">{item.discription}</Text>
                        <Text className="font-bold text-theme my-1">
                          {'\u20B9'}
                          {item.price}
                        </Text>
                        <View className="flex-row gap-1 items-center">
                          <Image className="w-3 h-3" source={iconConst.Star} />
                          <Text>{item.rating} Ratings</Text>
                        </View>

                        <View className="flex-row gap-1 my-1">
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
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      }
    </View>
  );
};

export default Categories;
