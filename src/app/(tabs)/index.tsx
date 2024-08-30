import { StyleSheet, FlatList } from "react-native";

import { View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} /> */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  text: {
    fontSize: 16,
  },
  price: {
    fontSize: 10,
    color: "blue",
    fontWeight: "bold",
  },
});
