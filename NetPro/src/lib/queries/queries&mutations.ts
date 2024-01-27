

import { INewUser } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { createUserAccount, signInAccount, signOutAccount, getCurrentUser} from "../appwrite/api"
import { QUERY_KEYS } from "./Keys"

export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: (user:INewUser) => createUserAccount(user)
    })
}

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

export const useGetCurrentUserMutation = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_CURRENT_USER],
      queryFn: getCurrentUser,
    })
  }