import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    location_container: {
        flexDirection: 'row',
        marginVertical: 5 
    },
    location_text:{
        fontSize: 17,
        fontWeight: 'bold',
        color: "#f05e5b"
    },
    location_info:{
        fontSize: 17,
        fontWeight: 'bold',
    },
    job_container: {
        flexDirection: 'row',
        marginVertical: 5
    },
    job_text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: "#f05e5b"
    },
    job_info: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    job_detail_container: {
        alignItems: 'center',
    },
    job_detail_text: {
        fontWeight: 'bold',
        fontSize: 30
    },
    button_container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        margin: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
        
    },
})