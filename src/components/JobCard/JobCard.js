import React from "react";
import { View, Text } from "react-native";
import styles from "./JobCardStyle"

const JobCard = ({job}) => {

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title_container}>{job.name}</Text>
            </View>
            
            <View style={styles.company_container}>
                <Text>{job.company.name}</Text>
            </View>
            

            <View style={styles.location_container}>
                <Text>{job.locations[0].name}</Text>
            </View>

            <View>
                <Text style={{ color: "#f05e5b"}}>{job.levels[0].name}</Text>
            </View>
            

            <Text></Text>
            
        </View>
    )
}

export default JobCard