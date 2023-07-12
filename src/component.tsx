import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

let boxHeight = 40;

const Component = (props: any) => {
  return (
    <View style={[styles.center]}>
      <View style={[styles.box]}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.text, { color: "black" }]}>{props.number}</Text>
          <TextInput
            style={[styles.text]}
            placeholder="Task"
            placeholderTextColor={"#a9a9a9"}
          >
            {props.text}
          </TextInput>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 100,
            marginTop: 2,
            marginRight: 10,
            alignItems: "center",
            height: 20,
            width: 20,
            backgroundColor: "#ff9500",
          }}
          onPress={() => {
            props.delete(props.id);
          }}
        >
          <Text
            style={[
              {
                lineHeight: 20,
                textAlign: "center",
                fontSize: 20,
                color: "black",
              },
            ]}
          >
            x
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component;

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    backgroundColor: "gray",
    width: "90%",
    flexDirection: "row",
    marginVertical: 4,
    justifyContent: "space-between",
  },
  text: {
    paddingLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  center: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
