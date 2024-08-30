import { StyleSheet, Image, Pressable } from "react-native";

import { Text, View } from "@/src/components/Themed";
import { Product } from "@/types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://images.summitmedia-digital.com/spotph/images/2017/11/21/Amare-18.jpg";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
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
    resizeMode: "contain",
  },
  description: {
    fontSize: 12,
    color: "gray",
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
