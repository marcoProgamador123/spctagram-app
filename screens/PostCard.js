import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, FlatList, Platform , StatusBar} from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"


export default class PostCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.CardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                style={styles.profileImage}
                                source={require("../assets/profile_img.png")}/>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>
                                {this.props.post.author}
                            </Text>
                        </View>
                    </View>
                    <Image  source={require("../assets/post.jpeg")} style={styles.postImage} />
                    <View style={styles.capitionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.legend}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name="heart" size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}> 12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    AppTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    AppIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    IconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    AppTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    CardContainer: {
        flex: 0.85
    },
    authorContainer: {

    },
    authorImageContainer: {

    },
    profileImage: {

    },
    authorNameContainer: {

    },
    authorNameText: {

    },
    capitionContainer: {

    },
    captionText: {

    },
    postImage: {

    },
    actionContainer: {

    },
    likeButton: {

    },
    likeText: {

    }
})
