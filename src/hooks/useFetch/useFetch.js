import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function useFetch(url){
    const [loading, setLoading] = useState(true)
    const [error, setError]  = useState(null)
    const [data, setData] = useState([])

    var worked = false
    
    async function fetchData(){
        console.log("fetchData başl artık")
        try{
            console.log("fetchData başlıyor")
            const {data: responseData} = await axios.get(url)
            setData(responseData)
            console.log("çalış1")
            console.log(data)
            console.log("çalış2")
        }
        catch(err){
            console.log(data)
            console.log("hata")
            setError(err.message)
        }
        finally{
            setLoading(false)
        }

        worked = true
        if(worked == true)
        console.log("worked: " + worked)
        else
        console.log("worked''': " + worked)

        console.log({data})
    }
    console.log("worked1: " + worked)

    useEffect(() => { fetchData() }, [])    
    console.log("worked2: " + worked)

    return {loading, data, error};
}

export default useFetch