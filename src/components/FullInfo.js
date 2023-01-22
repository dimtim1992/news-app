import { StyleSheet, Text, View, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.container}>
      <Image
        style={styles.image}
        source={{
          height: 100,
          width: 100,
          uri: route.params.img,
        }}
      />
      <Text style={gStyle.title}>{route.params.title}</Text>
      <Text style={gStyle.title}>{route.params.article}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { alignSelf: "center" },
});
