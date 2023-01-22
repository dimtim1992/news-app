import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { gStyle } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

export default function Main({ navigation }) {
  function loadScene() {
    navigation.navigate("Contacts");
  }

  const [modalWindow, setModalWindow] = useState(false);

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

  function addArticle(article) {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });

    setModalWindow(false);
  }

  return (
    <View style={gStyle.container}>
      {/* <Text style={gStyle.title}>Main</Text> */}
      <Modal visible={modalWindow}>
        <View style={[gStyle.container.flex, styles.container]}>
          <Ionicons
            name="close"
            size={24}
            color="#FFF"
            style={styles.iconClose}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Modal</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add"
        size={24}
        color="#FFF"
        style={styles.icon}
        onPress={() => setModalWindow(true)}
      />
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
  container: {
    backgroundColor: "#000",
    color: "#FFF",
    textAlign: "center",
  },
  icon: {
    textAlign: "center",
    backgroundColor: "#000",
    marginBottom: 2,
  },
  iconClose: {
    textAlign: "center",
    marginBottom: 2,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#000",
    margin: 1,
    padding: 5,
  },
  image: {
    alignSelf: "center",
    height: 100,
    width: 100,
  },
  title: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  announce: { color: "#FFF", textAlign: "center", fontSize: 14 },
});
