export const todoList=[
    {
        item: 'Master JavaScript',
        completed: false,
        id: 1
    },
    {
        item: 'Learn React',
        completed: false,
        id: 2
    },
]

// export const list=[
//     {
//         item: 'Master JavaScript',
//         completed: false,
//         id: 1
//     },
//     {
//         item: 'Learn React',
//         completed: false,
//         id: 2
//     },
// ]



export function reducer(state,action){
    switch(action.type){
    case 'Add task':
     const newState= state.concat({
        item: action.payload,
        completed: false,
        id: Date.now()
     })
    //  list.push({
    //     item: action.payload,
    //     completed: false,
    //     id: Date.now()
    // })
    return [...newState];
     

     case 'toggle complete':
     return state=[
         ...state
     ]
     case 'search task':
     const stateFind= state.find( each => each.item === action.payload)
     console.log(stateFind)
     return state=[ stateFind ];

     case 'clear completed tasks':
     const stateModified=state.filter(each=> each.completed === false)
     return stateModified;
     
    //  case 'return':
    //  return list
    
    default:
    return 
    }
}