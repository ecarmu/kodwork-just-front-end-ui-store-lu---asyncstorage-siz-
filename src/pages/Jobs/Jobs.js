import axios from "axios";
import React from "react";
import { SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import Config from "react-native-config";
import JobCard from "../../components/JobCard";
import useFetch from "../../hooks/useFetch";
import styles from "./JobsStyle"

const Jobs = ({navigation}) => {

    const { loading, data, error } = useFetch(Config.API_ALL_JOBS_URL)

    function handlePress(item){
        console.log("geçirilen item: " + item)
        navigation.navigate("JobsDetailsScreen", {item});
    }

    function renderJobCard({item}){
        return (
        <TouchableOpacity onPress={() => handlePress(item)}>
            <JobCard job={item} />
        </TouchableOpacity>
        );
            
    }

    console.log({data})

    return (
        <SafeAreaView style = {styles.container}>
            <FlatList 
                data={data.results}
                renderItem={renderJobCard}
            />
        </SafeAreaView>
    )
}

export default Jobs