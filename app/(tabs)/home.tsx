import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../src/firebase";

export default function HomeScreen() {
  const [rows, setRows] = useState([
    {
      intensity1: "",
      situation: "",
      feeling: "",
      whatHappened: "",
      isHotThought: false,
      confirmsThought: "",
      contradictsThought: "",
      intensity2: "",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        intensity1: "",
        situation: "",
        feeling: "",
        whatHappened: "",
        isHotThought: false,
        confirmsThought: "",
        contradictsThought: "",
        intensity2: "",
      },
    ]);
  };

  const saveToFirebase = async () => {
    try {
      const thoughtsRef = collection(db, "thoughtredcord");
      for (const row of rows) {
        await addDoc(thoughtsRef, {
          ...row,
          timestamp: new Date(),
        });
      }
      // Clear form after saving
      setRows([
        {
          intensity1: "",
          situation: "",
          feeling: "",
          whatHappened: "",
          isHotThought: false,
          confirmsThought: "",
          contradictsThought: "",
          intensity2: "",
        },
      ]);
    } catch (error) {
      console.error("Error saving thoughts:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {rows.map((row, index) => (
        <View key={index} style={styles.row}>
          <Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Intensity (1-100)"
            keyboardType="numeric"
            value={row.intensity1}
            onChangeText={(text) => {
              const newRows = [...rows];
              newRows[index].intensity1 = text;
              setRows(newRows);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Situation"
            value={row.situation}
            onChangeText={(text) => {
              const newRows = [...rows];
              newRows[index].situation = text;
              setRows(newRows);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Feeling"
            value={row.feeling}
            onChangeText={(text) => {
              const newRows = [...rows];
              newRows[index].feeling = text;
              setRows(newRows);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="What happened?"
            value={row.whatHappened}
            onChangeText={(text) => {
              const newRows = [...rows];
              newRows[index].whatHappened = text;
              setRows(newRows);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirms thought?"
            value={row.confirmsThought}
            onChangeText={(text) => {
              const newRows = [...rows];
              newRows[index].confirmsThought = text;
              setRows(newRows);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Contradicts thought?"
            value={row.contradictsThought}
            onChangeText={(text) => {
              const newRows = [...rows];
              newRows[index].contradictsThought = text;
              setRows(newRows);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Intensity (1-100)"
            keyboardType="numeric"
            value={row.intensity2}
            onChangeText={(text) => {
              const newRows = [...rows];
              newRows[index].intensity2 = text;
              setRows(newRows);
            }}
          />
        </View>
      ))}
      <Button title="Save Row" onPress={saveToFirebase} />
      <Button title="Add New Row" onPress={addRow} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
  },
  topButton: {
    marginBottom: 16,
  },
});
