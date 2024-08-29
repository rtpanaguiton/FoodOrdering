import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/src/components/Themed";

const ProductListItem = ({ product }: any) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 10,
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
