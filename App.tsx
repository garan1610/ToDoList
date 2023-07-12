import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Component from "./src/component";
import AddTask from "./src/addTask";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState(new Array(0));
  const [text, setText] = useState("");

  const deleteItem = (id: any) => {
    let newArray = task;
    let removedNum = 0;
    newArray = newArray.filter((item) => {
      if (item.id == id) {
        removedNum = item.number;
      }
      return item.id !== id;
    });
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].number > removedNum) {
        newArray[i].number--;
      }
    }
    setTask(newArray);
  };

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          paddingHorizontal: 30,
          paddingTop: 30,
          color: "#ff9500",
        }}
      >
        To Do List
      </Text>

      <View
        style={[
          {
            flexDirection: "column",
            justifyContent: "center",
            marginVertical: 30,
            height: 100,
          },
        ]}
      >
        <AddTask
          addButtonPressed={() => {
            if (text) {
              setTask([
                ...task,
                {
                  id: Math.random(),
                  number: task.length + 1,
                  text: text,
                },
              ]);
              setText("");
            }
          }}
          onChangeText={setText}
          inPutValue={text}
        />

        <TouchableOpacity
          style={{ paddingRight: 40, marginVertical: 20 }}
          onPress={() => {
            setTask(new Array(0));
          }}
        >
          <Text style={[styles.text]}>Clear</Text>
        </TouchableOpacity>
      </View>

      {task.map((item, index) => {
        return (
          <Component
            number={item.number}
            text={item.text}
            key={index}
            delete={deleteItem}
            id={item.id}
          />
        );
      })}

      <StatusBar style="auto" />
      {/* hello */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    paddingLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff9500",
    textAlign: "center",
  },
});
