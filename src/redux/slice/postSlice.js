import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import {PostService} from "../../services";

const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null

};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await PostService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
)
const getById=createAsyncThunk(
    'postSlice/getById',
    async ({id},rejectWithValue)=> {
        try {
            const {data} = await PostService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }

)
const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        // getAll:(state,action)=>{
        //     state.posts=action.payload
        // },
        setSelectedPosts: (state, action) => {
            state.selectedPost = action.payload
        }
    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state,action)=>{
    //         state.loading=false
    //         state.posts=action.payload
    //     },
    //     [getAll.rejected]:(state,action)=>{
    //         state.loading=false
    //         state.errors=action.payload
    //     },
    //     [getAll.pending]:(state)=>{
    //         state.loading=true
    // }
    // }
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled,(state,actions)=>{
        state.selectedPost=actions.payload
})

})
const {reducer: postsReducer, actions: {setSelectedPosts}} = postSlice

const postActions = {
    setSelectedPosts,
    getAll,
    getById
}
export {
    postsReducer,
    postActions
}