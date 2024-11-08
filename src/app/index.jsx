import {StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {FontAwesome, EvilIcons}  from "@expo/vector-icons"
import { Globals } from "../globals";
import { router } from "expo-router";

export default function Page() {

  
  return (
    <View style={styles.container}>
      <View style={styles.boxLogin}>
        <EvilIcons name="user" size={200} color={Globals.Theme.Secondary}/>
        <View style={styles.boxInput}>
          <TextInput placeholder="Email" style={styles.input}/>
          <FontAwesome name="user" size={24} color="black" />
        </View>
        <View style={styles.boxInput}>
          <TextInput placeholder="Senha" style={styles.input}/>
          <FontAwesome name="lock" size={24} color={Globals.Theme.Primary} />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Globals.Theme.Primary,
    justifyContent: "center",
    alignItems: "center",
  },
  boxLogin: {
    width: "90%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    gap:20,
    // backgroundColor: "red",
  },
  boxInput: {
    width: 300,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Globals.Theme.Text,
    padding:10,
    borderRadius:40
  },
  input:{
    width:"90%",
    // color:"black"
  },
  btn:{
    backgroundColor:"green",
    width:"50%",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    borderRadius:40,
  },
  text:{
    color: Globals.Theme.primary
  }
});
