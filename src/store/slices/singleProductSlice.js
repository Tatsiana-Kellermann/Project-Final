import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { URL } from '../../helpers/links'

export const fetchSingleProduct = createAsyncThunk(
    'product/fetchSingleProduct',
    async (id, { rejectWithValue }) => {
        try {
            const resp = await fetch(`${URL}/products/${id}`)
            if (!resp.ok) {
                throw new Error('Server problem')
            }
            const product = await resp.json()
            return product
        } catch (error) {
            rejectWithValue(error.message)
        }

    }
)
export const singleProductSlice = createSlice({
    name: 'item',
    initialState: {
        item: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
                state.item = payload
                state.status = 'resolve'
            })
            .addCase(fetchSingleProduct.rejected, (state, { payload }) => {
                state.status = 'rejected'
                state.error = payload
            })
    }
})

export default singleProductSlice.reducer