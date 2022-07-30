import *as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator=()=> {
  return (
      <Tab.Navigator labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            var iconName
            if (route.name==="Feed") {
              iconName=focused?"book":"book-outline"
            } else if(route.name==="CreatePost"){
              iconName=focused?"create":"create-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} style={styles.icons}/>
        },
      })} activeColor={"tomato"} inactiveColor={"gray"} >
        <Tab.Screen name="Feed" component={Feed} />

        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons:{

  }
});



export default BottomTabNavigator