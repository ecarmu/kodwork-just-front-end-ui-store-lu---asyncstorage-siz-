import React from "react";
import { FlatList, SafeAreaView, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/JobCard";

const Submits = () => {

    const submitJobList = useSelector(data => data.submitJobList)
    const dispatch = useDispatch();


    function handlePress(item){
        dispatch({type: 'REMOVE_FROM_SUBMIT', payload: item} )
    }

    return(
        <SafeAreaView>
            <FlatList
                data={submitJobList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <JobCard job={item} onPress={handlePress} />
                    </TouchableOpacity>
                )}
            />

        </SafeAreaView>
    )
}

export default Submits;