import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { fetchTasks } from "./services/api";

export default function Index() {
  interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    status: string;
    createdAt: string;
  }

  interface FetchReturn {
    tasks: Task[];
    totalTask: number;
  }

  const [datas, setDatas] = useState<FetchReturn>({
    tasks: [],
    totalTask: 0,
  });

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetchTasks();
        setDatas(response);
      } catch (error) {
        console.error(error);
      }
    };
    getTasks();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {datas.tasks.map((task) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.title}>{task.title}</Text>
              <Text>{task.description}</Text>
            </View>
            <View style={styles.midCardItem}>
              <View style={styles.circle}></View>
              <Text>{task.dueDate}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 16,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  midCardItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  circle: {
    borderRadius: "100%",
    width: 12,
    height: 12,
    backgroundColor: "#666666",
  },
});
