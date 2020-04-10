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



export function reducer(state,action){
    switch(action.type){
    case 'Add task':
     console.log(state)
     return state = [
         ...state,
         {
         item: action.payload,
         completed: false,
         id: Date.now()
         }
     ]
     case 'toggle complete':
     return state=[
         ...state
     ]
     
    default:
    return 
    }
}