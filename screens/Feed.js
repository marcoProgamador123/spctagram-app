import React,{Component} from "react";
import{Text, View, StyleSheet, SafeAreaView, Image, FlatList, Platform , StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "./PostCard"


let posts = require("./Temp_post.json")

export default class Feed extends Component{
    
    renderItem = ({ item: post }) => {
        return <PostCard post={post}/>;
      };
    
      keyExtractor = (item, index) => index.toString();
    
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.AppTitle}>
                    <View styles={styles.AppIcon}>
                        <Image source={require("../assets/logo.png")}
                            style={styles.IconImage}/>
                            
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text styles={styles.AppTitleText}>Espectagrama</Text>
                    </View>
                        <View style={styles.CardContainer}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={posts}
                                renderItem={this.renderItem}
                            />
                        </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    AppTitle:{
        flex:0.07,
        flexDirection: "row"
    },
    AppIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    IconImage:{
        width:"100%",
        height:"100%",
        resizeMode: "contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    AppTitleText:{
        color:"white",
        fontSize: RFValue(28)
    },
    CardContainer:{
        flex:0.85
    }

})