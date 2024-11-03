import React, { useState, useRef } from "react";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";
import { View, Button, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { LineChart } from "react-native-chart-kit";
import { db } from "../../src/firebase"; 

export default function HistoryScreen() {
  const chartRef = useRef(null);
  const [timeframe, setTimeframe] = useState("daily");
  const [chartData, setChartData] = useState<{ labels: string[]; datasets: { data: number[] }[] }>({
    labels: [],
    datasets: [],
  });

  const fetchData = async () => {
    try {
      const q = query(collection(db, "thoughtrecord"), orderBy("timestamp"));
      const querySnapshot = await getDocs(q);
      const labels: string[] = [];
      const data: number[] = [];

      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        labels.push(docData.timestamp.toDate().toLocaleDateString());
        data.push(docData.value); // Adjust according to your data structure
      });

      setChartData({
        labels,
        datasets: [
          {
            data,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const shareChart = async () => {
    try {
      const uri = await captureRef(chartRef, {
        format: "png",
        quality: 1,
      });

      const fileUri = `${FileSystem.documentDirectory}chart.png`;
      await FileSystem.moveAsync({
        from: uri,
        to: fileUri,
      });

      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.error("Error sharing chart: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Slider
        value={["daily", "weekly", "monthly"].indexOf(timeframe)}
        minimumValue={0}
        maximumValue={2}
        step={1}
        onValueChange={(value: number) => {
          setTimeframe(["daily", "weekly", "monthly"][value]);
        }}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}/>
      <LineChart
        data={chartData}
        width={400}
        height={250}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
      <Button title="Share Chart" onPress={shareChart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
