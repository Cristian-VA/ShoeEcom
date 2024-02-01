

import { INewUser } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import {  signInAccount, signOutAccount, getMenCollection, getMenProductById } from "../appwrite/api"
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
    queryKey:[QUERY_KEYS.GET_MEN_COLLECTION], 
    queryFn: () => getMenCollection(category),  
    
    })
}

export const useGetPostByIdMutation = (productId:string) =>{
    return useQuery({
    queryKey:[QUERY_KEYS.GET_MEN_COLLECTION_PRODUCTID, productId], //when postIdchanges it triggers a refetch
    queryFn: () => getMenProductById(productId),  
    enabled: !!productId      
    })
}