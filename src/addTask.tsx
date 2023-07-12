import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

let button = 20;
const AddTask = (props: any) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <TextInput
        style={[styles.text, { width: 200 }]}
        placeholder="Add New Task"
        placeholderTextColor={"#ff9500"}
        onChangeText={props.onChangeText}
        value={props.inPutValue}
      />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingRight: 20,
        }}
        onPress={() => {
          props.addButtonPressed();
        }}
      >
        <View
          style={{
            borderRadius: 100,
            marginLeft: 7,
            alignItems: "center",
            height: button,
            width: button,
            backgroundColor: "#ff9500",
          }}
        >
          <Text
            style={[
              {
                lineHeight: button,
                textAlign: "center",
                fontSize: 20,
                color: "black",
              },
            ]}
          >
            +
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  text: {
    paddingLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff9500",
    textAlign: "center",
  },
});
