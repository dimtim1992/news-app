import { StyleSheet, TextInput, View, Button } from "react-native";
import { gStyle } from "../styles/style";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{
          title: "",
          announce: "",
          article: "",
          img: "",
        }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              value={props.values.title}
              placeholder="Enter title"
              onChangeText={props.handleChange("title")}
            />
            <TextInput
              style={styles.input}
              value={props.values.announce}
              //   multiline
              placeholder="Enter announce"
              onChangeText={props.handleChange("announce")}
            />
            <TextInput
              style={styles.input}
              value={props.values.article}
              //   multiline
              placeholder="Enter article"
              onChangeText={props.handleChange("article")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Enter image source"
              onChangeText={props.handleChange("img")}
            />
            <Button title="Send" onPress={props.handleSubmit} color="#FFF" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    color: "#FFF",
    backgroundColor: "#000",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
  },
});
