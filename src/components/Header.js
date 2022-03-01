import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Header = () =>{
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>椅子樂團 The Chairs</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
})

export default Header;