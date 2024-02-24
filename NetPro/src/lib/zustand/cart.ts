import {create} from "zustand"
import { persist } from 'zustand/middleware'

const useCart= create(
    persist((set:any) => ({
    cart: [],
    product: {},
    setProduct: (params:any) => {
        const {newProduct} = params
        set((state:any) => {
            return {
                ...state,
                product: newProduct
            }

        })
    },
    addToCart: (params:any) => {
        const {newItem} = params
        set((state:any) =>{
            const newCart = [...state.cart, newItem]
            return {
                ...state,
                cart:newCart
            }
        })
    },
    removeFromCart: (params:any) => {
        const { index } = params
        set((state:any) => {
            const newCart = state.cart.filter((element:any, elementIndex:any) => {
                return elementIndex !== index
            })
            return {
                ...state,
                cart: newCart
            }
        })
    },
    emptyCart: () => {
       
        set((state:any) =>{
            const newCart:any = []
            return {
                ...state,
                cart:newCart
            }
        })
    }

}), {
    name: "cart store"
}))


export default useCart