import { create } from "zustand";
import { persist } from 'zustand/middleware';

const useSeenProducts = create(
persist((set) => ({
          products: [],
          addProduct: (params:any) => {
              const { product } = params;
              set((state:any) => {
                  if (state.products.some((p:any) => p.$id === product.$id)) {
                      return state;
                  }
  
                  let newProducts = [...state.products, product];
                  if (newProducts.length > 9) {
                      newProducts = newProducts.slice(1);
                  }
                  return {
                      ...state,
                      products: newProducts
                  };
              });   
          }
      }),{
        name: "product store"
    }))
  

  

export default useSeenProducts;