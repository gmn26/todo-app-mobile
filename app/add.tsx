import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function Add() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const inputHandler = (name: string, value: string) => {
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 36,
      }}
    >
      <View style={{ width: "100%", gap: 16, alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: 700 }}>Add Task</Text>
        <TextInput
          style={{ borderWidth: 1, width: "100%", borderRadius: 12 }}
          placeholder="Title"
          onChangeText={(text) => inputHandler("title", text)}
        />
        <TextInput
          style={{ borderWidth: 1, width: "100%", borderRadius: 12 }}
          placeholder="Description"
          onChangeText={(text) => inputHandler("description", text)}
        />
        <Button title="Save Task" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
