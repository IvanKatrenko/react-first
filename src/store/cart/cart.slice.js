import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        const token = state.auth.acessToken;

        try {
            const response = await fetch(`${API_URL}api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            //если произошла ошибка
            if (!response.ok) {
                throw new Error('Failed to load cart contents')
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addProductToCart = createAsyncThunk(
    'cart/fetchCart',
    async (productData, { getState, rejectWithValue }) => {
        const state = getState();
        const token = state.auth.acessToken;

        try {
            const response = await fetch(`${API_URL}api/cart/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData)
            })
            //если произошла ошибка
            if (!response.ok) {
                throw new Error('Failed to add item to cart')
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const removeProductToCart = createAsyncThunk(
    'cart/fetchCart',
    async (productData, { getState, rejectWithValue }) => {
        const state = getState();
        const token = state.auth.acessToken;

        try {
            const response = await fetch(`${API_URL}api/cart/products/product`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            //если произошла ошибка
            if (!response.ok) {
                throw new Error('failed to load cart contents')
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    products: [],
    totalPrice: 0,
    totalCount: 0,
    loadingFetch: false, // для получения корзины
    loadingAdd: false, // для добавления товаров в коризну
    loadingUpdate: false, // для изменения товаров в корзине
    loadingRemove: false, //для удаления
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder.addCase()
    }
})

export default cartSlice.reducer;