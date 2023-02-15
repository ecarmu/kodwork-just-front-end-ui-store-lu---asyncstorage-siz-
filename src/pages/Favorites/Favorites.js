import React from "react";
import { FlatList, SafeAreaView, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import JobCard from "../../components/JobCard";


const Favorites = ({navigation}) => {

    const favJobList = useSelector(s => s.favJobList);

    function handleOnPress(item){
        navigation.navigate('JobsDetailsScreen', {item})
    }

    return (
        <SafeAreaView>
            <FlatList
                data={favJobList}
                renderItem={( {item} ) => {
                    return(
                    <TouchableOpacity onPress={() => handleOnPress(item)}>
                        <JobCard job={item}/>
                    </TouchableOpacity>
                    )
                    
                
                    }
                 }
            />
        </SafeAreaView>
    )
}

export default Favorites;