import React from "react";
import { View, Text} from "react-native";
import styles from "./JobDetailCardStyle"
import RenderHTML from "react-native-render-html";

import Button from "../Button/Button";
import { useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";


const JobDetailCard = ({jobDetailCard, fav, submit}) => {
            
    const {width} = useWindowDimensions();

    const favJobList = useSelector(selector => selector.favJobList)
    const submitJobList = useSelector(selector => selector.submitJobList);


    const [addedToFav, setAddedToFav] = useState(fav)
    const [addedToSubmitted, setAddedToSubmitted] = useState(submit)

    const dispatch = useDispatch();


    function submitHandleOnPress() {
        console.log('submitJobList:', submitJobList);
        setAddedToSubmitted(true)
        dispatch({ type: 'ADD_TO_SUBMIT', payload: jobDetailCard})
    }

    function favHandleOnPress() {
        console.log('favJobList:', favJobList);
        setAddedToFav(true)
        dispatch({ type: 'ADD_TO_FAV', payload: jobDetailCard})
    }

    function UnSubmitHandleOnPress() {
        console.log('submitJobList:', submitJobList);
        setAddedToSubmitted(false)
        dispatch({ type: 'REMOVE_FROM_SUBMIT', payload: jobDetailCard })
    }

    function UnFavHandleOnPress() {
        console.log('favJobList:', favJobList);
        setAddedToFav(false)
        dispatch({ type: 'REMOVE_FROM_FAV', payload: jobDetailCard })
    }

        
    return (
        <View style = {styles.container}>

            
            <Text style = {styles.title}>{jobDetailCard.name}</Text>

            <View style = {styles.location_container}>
                <Text style={styles.location_text}>Locations: </Text>
                <Text style = {styles.location_info}>{jobDetailCard.locations[0].name}</Text>
            </View>
            
            <View style = {styles.job_container}>
                <Text style = {styles.job_text}>Job Level: </Text>
                <Text style = {styles.job_info}>{jobDetailCard.levels[0].name}</Text>
            </View>

            <View style = {styles.job_detail_container}>
                <Text style = {styles.job_detail_text}>Job Detail</Text>
            </View>

            <View style = {{overflow: 'scroll'}}>
                <RenderHTML source={{ html: jobDetailCard.contents }} contentWidth={width} />
            </View>

            


           
            <View style = {styles.button_container}>
                <View>
                    {addedToSubmitted ? <Button name="Un-Submit" onPress={UnSubmitHandleOnPress} /> : <Button name="Submit" onPress={submitHandleOnPress} /> }
                    
                </View>
                <View>
                    {addedToFav ? <Button name="Un-Favorite Job" onPress={UnFavHandleOnPress} /> : <Button name="Favorite Job" onPress={favHandleOnPress} /> }
                </View>
                
            </View>

        </View>
    )
}

export default JobDetailCard