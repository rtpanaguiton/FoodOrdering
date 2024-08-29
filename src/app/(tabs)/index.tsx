import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function TabOneScreen() {
  const product = products[0];

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
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
    width: 200,
    height: 200,
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
