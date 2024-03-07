

import { Filters } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import {  signInAccount, signOutAccount, getMenCollection, getMenProductById, getMenRelatedProducts, getWomenCollection, getKidsCollection, getWomenProductById, getKidsProductById, getWomenRelatedProducts,getKidsRelatedProducts, getSocksCollection, getSocksById, getSocksRelatedProducts, getMenFeaturedProducts, getWomenFeaturedProducts } from "../appwrite/api"

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





export const useGetMenCollectionBycategory = (fetchParams: { category: any; filters?: Filters }) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_MEN_COLLECTION, fetchParams], 
    queryFn: () => getMenCollection(fetchParams),  
    enabled: !!fetchParams,
    
    })
}
export const useGetWomenCollectionBycategory = (fetchParams: { category: any; filters?: Filters }) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_WOMEN_COLLECTION, fetchParams], 
    queryFn: () => getWomenCollection(fetchParams),  
    enabled: !!fetchParams,
    
    })
}

export const useGetSocksCollection = (fetchParams: { category: any; filters?: Filters }) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_SOCKS_COLLECTION, fetchParams], 
    queryFn: () => getSocksCollection(fetchParams),  
    enabled: !!fetchParams,
    
    })
}

export const useGetKidsCollectionBycategory = (fetchParams: { category: any; filters?: Filters }) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_KIDS_COLLECTION, fetchParams], 
    queryFn: () => getKidsCollection(fetchParams),  
    enabled: !!fetchParams,
    
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

export const useGetSocksProductId = (productId:string) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_SOCKS_COLLECTION_PRODUCTID, productId], //when postIdchanges it triggers a refetch
    queryFn: () => getSocksById(productId),  
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

  export const useGetSocksrelatedProducts = (productId: string | undefined, category:string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_SOCKS_COLLECTION, productId],
      queryFn: () => getSocksRelatedProducts(productId ||  "", category),
      enabled: !!productId,
    });
  };

  export const useGetFeaturedMenProducts = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_MEN_COLLECTION],
      queryFn: () => getMenFeaturedProducts(),
      
    });
  };

  export const useGetFeaturedWomenProducts = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_WOMEN_COLLECTION],
      queryFn: () => getWomenFeaturedProducts(),
      
    });
  };