import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todo:[]
}
console.log(initialState);

const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{

        fillToDo:(state, action) => {
            state.todo = [...action.payload]
        },

        addTodo:(state, action)=>{
            state.todo = [action.payload, ...state.todo ]
            
        },

        rmvTodo:(state, action)=>{

            const newToDo = state.todo.filter((item) => item.id !== action.payload)
            state.todo = newToDo
        },
        // complatedToDo:(state,action)=>{
        //     const currentIndex = action.payload
        //     const complated = action.payload.complated

        //     const newData = [...state.todo]
        //     newData[currentIndex - 1].complated = complated = !newData[currentIndex - 1]
        //         .complated

        //     state.todo = newData
        // }
    }
})


export const {fillToDo, addTodo,rmvTodo,complatedToDo} = todoSlice.actions


export default todoSlice.reducer