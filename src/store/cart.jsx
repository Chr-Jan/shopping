import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const {id, quantity} = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
        }},
});

export default cartSlice.reducer;