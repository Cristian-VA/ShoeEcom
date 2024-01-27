import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from 'react';
import { IContextType } from '@/types';
import Loader from '@/Root/components/Loader';
import { account } from '@/lib/appwrite/config';
import { INewUser } from '@/types';

export const INITIAL_STATE = {
    user: null,
    loginUser: () => {},
    logoutUser: () => {},
        registerUser: () => {},
        checkUserStatus: async () => false as boolean
   
    

}

const AuthContext = createContext<IContextType>(INITIAL_STATE)

export const AuthProvider = ({children}:{children:ReactNode}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() =>{
        checkUserStatus()
        
    }, [])

    const loginUser = async (userInfo:INewUser) => {
        setIsLoading(true)

        console.log('userInfo',userInfo)

        try{
            let response = await account.createEmailSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
            
        }catch(error){
            console.error(error)
        }
        setIsLoading(false)
        
     }

    const logoutUser = () => {
        account.deleteSession("current")
        setUser(null)

    }

    const registerUser = (userInfo) => {

    }

    const checkUserStatus = async () => {

        try {
            let accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)

    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus
        
    }

    return (
        <AuthContext.Provider value={contextData}>
            {isLoading ? <Loader/> : children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {return useContext(AuthContext)}