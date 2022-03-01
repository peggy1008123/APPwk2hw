import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from "./src/components/Header.js";
import AlbumList from "./src/components/AlbumList";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Header />

      <AlbumList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
