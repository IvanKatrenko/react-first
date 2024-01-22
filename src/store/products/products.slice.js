import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.accessToken;
        const response = await fetch(`${API_URL}api/products`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            if (response.status === 401) {
                return thunkAPI.rejectWithValue({
                    status: response.status,
                    error: 'Failed to get product !'
                })
            }
            throw new Error('Failed to get product')
        }

        return response.json();
    }
)

const initialState = {
    data: [],
    loading: false,
    error: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.loading = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.loading = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {

                state.loading = true;
                state.loading = action.error.message;
            })
    }
})

export default productsSlice.reducer;