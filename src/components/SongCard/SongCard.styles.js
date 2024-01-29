import {StyleSheet} from "react-native";

export default StyleSheet.create ({
    container:{
        padding:10,
        flexDirection:"row",
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container:{
        padding: 10,
        flex:1,
    },
    title:{
        fontWeight: "bold",
        fontSize: 23,
        color:"black",
    },
    info_container:{
        flexDirection:"row",
        alignItems:"flex-end",
        flex: 1,
    },
    artist:{
        color:"black",
        fontWeight:"bold",
    },
    year:{
        marginLeft: 10,
        fontSize:12,
        color:"gray",
        fontWeight:"bold",
    },
    soldout_container:{
        borderWidth:1,
        borderColor:"red",
        borderRadius:5,
        padding:5,
    },
    soldout_title:{
        color:"red",
    },
    content_container:{
        flexDirection:"row",
        alignItems:"center"
    },
})