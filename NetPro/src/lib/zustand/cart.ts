import {create} from "zustand"

const useCart= create((set, get) => ({
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
        const {itemIndex} = params
        set((state:any) =>{
            const newCart = state.cart.filter(( elementIndex:any) => {
                elementIndex !== itemIndex
            })
            return {
                ...state,
                cart:newCart
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

}))


export default useCart