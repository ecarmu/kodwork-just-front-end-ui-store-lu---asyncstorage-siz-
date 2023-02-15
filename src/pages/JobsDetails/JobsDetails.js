import React from "react";
import { Button, SafeAreaView, View, Text, ScrollView } from "react-native";
import styles from "./JobsDetailsStyle"

import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import JobDetailCard from "../../components/JobDetailCard";


const JobsDetails = ({navigation, route}) => {

    const {item} = route.params;

    const { loading, data, error } = useFetch(Config.API_SPECIFIC_JOB_URL + item.id)

    console.log("itemm: " + item + " dataa: " + data);

    return(
        <SafeAreaView style = {styles.button_container}>
            <ScrollView>
                <JobDetailCard jobDetailCard={item} />
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default JobsDetails;