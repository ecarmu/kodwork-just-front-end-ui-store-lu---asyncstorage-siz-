export default function reducer(state, action){
    counter = 0;
    switch(action.type){
        
        case 'ADD_TO_SUBMIT':
            console.log("1) true or false: " + state.submitJobList.find(data => data.id === action.payload.id) == undefined)
            console.log("2) " + state.submitJobList)
            if (state.submitJobList.find(data => data.id === action.payload.id) == undefined){
                console.log("vaaayyyy... submitledin haa??!")
                return { ...state, submitJobList: [...state.submitJobList, action.payload] }
            }
            else
            console.log("tamam babaaa... zaten submit etmişsin... kasma artık yeter")
            return state
        case 'REMOVE_FROM_SUBMIT':
            const newSubmitJobList = state.submitJobList.filter(submitJob => submitJob.id !== action.payload.id)
            if (newSubmitJobList.length < state.submitJobList.length){
                console.log("submitten kaldırdın")
                return {...state, submitJobList: newSubmitJobList}
            }
            else{
                console.log("submit zaten olmayan bir şeyi nasıl kaldıracaksın?")
                return state;
            }



        case 'ADD_TO_FAV':
            console.log("1) true or false: " + state.favJobList.find(favJob => favJob.id === action.payload.id))
            console.log("2) " + state.favJobList)
            if( state.favJobList.find(favJob => favJob.id === action.payload.id) === undefined){
                console.log("HELAAAAL LAN! ATTIN FAV'A")
            return { ...state, favJobList: [...state.favJobList, action.payload]}

            }

            else //eğerr her şeyi doğru yapmışsan, bu else çalışmaz zaten. Ama garanti olsun diye koydum
                console.log("Zaten eklemişsin bunu fav'a")
            return state;

        case 'REMOVE_FROM_FAV':
            console.log("1) true or false: " + state.favJobList.find(favJob => favJob.id === action.payload.id))
            console.log("2) " + state.favJobList)
            const newFavJobList = state.favJobList.filter(favJob => favJob.id !== action.payload.id)
            if (newFavJobList.length < state.favJobList.length) {
                console.log("tamaammm... önceden fav'a atmışsın kardeş!!!")
                return { ...state, favJobList: newFavJobList }
            } else {
                console.log("kardeş, fav etmemişsin henüz. Nasıl kaldıracan?")
                return state;
            }


        default: 
            return state
    }
}