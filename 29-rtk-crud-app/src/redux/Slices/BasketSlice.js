import { createSlice } from "@reduxjs/toolkit"

export const BasketSlice = createSlice({
    name: 'Basket',
    initialState: {
        basket: [],
    },
    reducers: {
        toggleBasket: (state, action) => {
            const idx =  state.basket.findIndex(item => item.id === action.payload.id)
            if (idx >= 0) {
                state.basket.splice(idx, 1)
            }
            else {
                state.basket.push(action.payload)
            }
        }
    }
})

export default BasketSlice
export const { toggleBasket } = BasketSlice.actions