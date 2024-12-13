import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { addTask } from "./services/api";
import { router } from "expo-router";

export default function Add() {
  interface AddTask {
    title: string;
    description: string;
    dueDate: string;
  }

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "2024-12-12",
  });

  const inputHandler = (name: string, value: string) => {
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const submitHandler = async (body: AddTask) => {
    try {
      const response = await addTask(body);
      if (!response.success) {
        alert("Gagal tambah data");
      } else {
        alert("Berhasil tambah data");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
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
        <Button title="Save Task" onPress={() => submitHandler(formData)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
