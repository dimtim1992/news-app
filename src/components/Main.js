import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { gStyle } from "../styles/style";

export default function Main({ navigation }) {
  function loadScene() {
    navigation.navigate("Contacts");
  }

  const [news, setNews] = useState([
    {
      key: "0",
      title: "title",
      announce: "announce",
      article: "article",
      img: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    },
    {
      key: "1",
      title: "title",
      announce: "announce",
      article: "article",
      img: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    },
    {
      key: "2",
      title: "title",
      announce: "announce",
      article: "article",
      img: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    },
  ]);

  return (
    <View style={gStyle.container}>
      {/* <Text style={gStyle.title}>Main</Text> */}
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              style={styles.image}
              source={{
                height: 100,
                width: 100,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.announce}>{item.announce}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#000",
    margin: 1,
    padding: 5,
  },
  image: {
    alignSelf: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  announce: { color: "#FFF", textAlign: "center", fontSize: 14 },
});
