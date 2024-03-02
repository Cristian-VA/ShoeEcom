import {create} from "zustand"
import { persist } from 'zustand/middleware'

const useSeenProducts= create(
    persist((set:any) => ({
    products: [],
    addProduct: (params:any) => {
        const {newItem} = params
        set((state:any) =>{
            const newCart = [...state.cart, newItem]
            return {
                ...state,
                cart:newCart
            }
        })
    },
    

}), {
    name: "recently viewed products store"
}))


export default useSeenProducts