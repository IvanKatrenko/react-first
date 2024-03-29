import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.accessToken;
        const response = await fetch(`${API_URL}api/productCategories`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        if (!response.ok) {
            if (response.status === 401) {
                return thunkAPI.rejectWithValue({
                    status: response.status,
                    error: 'Failed to get directory !'
                })
            }
            throw new Error('Failed to get directory')
        }

        return response.json();
    }
)

const initialState = {
    data: [],
    loading: false,
    error: null,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.loading = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.loading = null;
            })
            .addCase(fetchCategories.rejected, (state, action) => {

                state.loading = true;
                state.loading = action.error.message;
            })
    }
})

export default categoriesSlice.reducer;