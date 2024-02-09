

import { INewUser } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import {  signInAccount, signOutAccount, getMenCollection, getMenProductById, getMenRelatedProducts, getWomenCollection, getKidsCollection, getWomenProductById, getKidsProductById, getWomenRelatedProducts,getKidsRelatedProducts } from "../appwrite/api"

import { QUERY_KEYS } from "./Keys"



export const useSignInAccountMutation = () => {
    return useMutation({
        mutationFn: (user:{ 
            email:string, 
            password:string
        }) => signInAccount(user)
    })
}

export const useSignOutAccountMutation = () => {
    return useMutation({
        mutationFn: signOutAccount
    })
}





export const useGetMenCollectionBycategory = (category:string) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_MEN_COLLECTION, category], 
    queryFn: () => getMenCollection(category),  
    enabled: !!category,
    
    })
}
export const useGetWomenCollectionBycategory = (category:string) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_WOMEN_COLLECTION, category], 
    queryFn: () => getWomenCollection(category),  
    enabled: !!category,
    
    })
}

export const useGetKidsCollectionBycategory = (category:string) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_KIDS_COLLECTION, category], 
    queryFn: () => getKidsCollection(category),  
    enabled: !!category,
    
    })
}

//get Product by ID

export const useGetMenProductId = (productId:string) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_MEN_COLLECTION_PRODUCTID, productId], //when postIdchanges it triggers a refetch
    queryFn: () => getMenProductById(productId),  
    enabled: !!productId      
    })
}

export const useGetWomenProductId = (productId:string) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_WOMEN_COLLECTION_PRODUCTID, productId], //when postIdchanges it triggers a refetch
    queryFn: () => getWomenProductById(productId),  
    enabled: !!productId      
    })
}

export const useGetKidsProductId = (productId:string) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_KIDS_COLLECTION_PRODUCTID, productId], //when postIdchanges it triggers a refetch
    queryFn: () => getKidsProductById(productId),  
    enabled: !!productId      
    })
}

// Related Products

export const useGetMenrelatedProducts = (productId: string | undefined, category:string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_MEN_COLLECTION, productId],
      queryFn: () => getMenRelatedProducts(productId ||  "", category),
      enabled: !!productId,
    });
  };

  export const useGetWomenrelatedProducts = (productId: string | undefined, category:string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_WOMEN_COLLECTION, productId],
      queryFn: () => getWomenRelatedProducts(productId ||  "", category),
      enabled: !!productId,
    });
  };

  export const useGetKidsrelatedProducts = (productId: string | undefined, category:string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_KIDS_COLLECTION, productId],
      queryFn: () => getKidsRelatedProducts(productId ||  "", category),
      enabled: !!productId,
    });
  };

