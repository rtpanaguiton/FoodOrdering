import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ProductDetailScreen for id: {id} </Text>
    </View>
  );
};

export default ProductDetailScreen;
