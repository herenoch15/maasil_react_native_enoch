const initialeState =
{
    toDoList:
    [
        {"id":1,"title":"Tache 1","date":"2020-05-05","active":1},
        {"id":2,"title":"Tache 2","date":"2020-05-06","active":1},
        {"id":3,"title":"Tache 3","date":"2020-05-07","active":0},
        {"id":4,"title":"Tache 4","date":"2020-05-08","active":1}
    ]
}
Reducers = (state = initialeState, action) => 
{
    let nextState;
    switch (action.type)
     {

        case 'ADD_TO_DO_LIST': 
        {
            const nextState = {
                ...state,
                toDoList: [...state.toDoList, action.value]
            }
            return nextState
        }

        case 'ADD_ACTIVE': 
        {
            //let list=
            const nextState = {
                ...state,
                toDoList: [...state.toDoList.filter(function (item) {return item.id !=action.value.id}), action.value]
            }
            return nextState   
         }   
         case "DELETE_TACHE":
        {
            console.log("DELETE")
            nextState = {
                ...state,
                toDoList:state.toDoList.filter(function (item) {
                    return item.id !=parseInt(action.value)
                })
            }
            return nextState 
        }
         
         
        default: 
            return state
    }
}
export default Reducers;