import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const {  year ,title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.headerContentStyle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.discrip}>{artist}</Text>
          <Text style={styles.discrip}>{year}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,

  },
  cardContainerStyle: {
    
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30
  },

  imageStyle: {
    height: 300,
    width: 300,
  },

  title: {
    fontSize: 16,
  },

  discrip: {
    fontSize: 12,
    color: "#858585",
  }
});

export default AlbumDetail;