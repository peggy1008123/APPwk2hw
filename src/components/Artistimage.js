import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Artistimage = () =>{
    return(
        <View style={styles.artistcard}>
            <View>
                <Image style = {styles.image} 
                source={{
                uri: "https://i.kfs.io/artist/global/16843699,0v7/fit/300x300.jpg"
            }}/>
            </View>
            <View style = {styles.artisttext}>
                <Text style = {styles.bandname}>
                    椅子樂團
                </Text>
                <Text style = {styles.bandname}>
                    The Chairs
                </Text>
                <Text style = {styles.btn}>
                    PLAY
                </Text>
            </View>
        </View>
    );
};
 
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 30,
        marginRight: 20,
    },
    artistcard:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    artisttext: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
        marginTop: 45,
    },
    bandname: {
        fontSize: 16,
        fontWeight: "bold",
    },
    btn: {
        borderRadius: 2,
        borderWidth: 2,
        fontSize: 16,
        marginTop: 20,
        backgroundColor: "#fff",
        color: "#000",
        height: 30,
        width: 80,
        textAlign: "center",
        lineHeight: 28,
    }
});

export default Artistimage;