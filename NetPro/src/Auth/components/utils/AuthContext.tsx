// @ts-nocheck
import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from 'react';
import { IContextType } from '@/types';
import Loader from '@/Root/components/Loader';
import { account } from '@/lib/appwrite/config';
import { INewUser } from '@/types';
import { ID } from 'appwrite';
import { saveUserToDB } from '@/lib/appwrite/api';
import { useNavigate } from 'react-router-dom';


export const INITIAL_STATE = {
    user: null,
    loginUser: () => {},
    logoutUser: () => {},
        registerUser: () => {},
        checkUserStatus: async () => false as boolean
   
    

}

const AuthContext = createContext<IContextType>(INITIAL_STATE)

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (
            localStorage.getItem("cookieFallback") === "[]" ||
            localStorage.getItem("cookieFallback") === null 
          ) navigate("")

        
        checkUserStatus()
      }, [])

    const loginUser = async (userInfo:INewUser) => {
        setIsLoading(true)

        console.log('userInfo',userInfo)

        try{
            let NewSesion = await account.createEmailSession(userInfo.email, userInfo.password)
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

    const registerUser = async (userInfo:any) => {
        setIsLoading(true)

        try{
            
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name);
    
            await account.createEmailSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
            const newUser = await saveUserToDB({
                accountId: accountDetails.$id,
                email: accountDetails.email,
                name: accountDetails.name,  
                username: userInfo.username              
              });
            
            
        }catch(error){
            console.error(error)
        }
    
        setIsLoading(false)
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

//$createdAt
//: 
//"2024-01-28T04:01:25.575+00:00"
//$id
//: 
//"65b5d1958aa5ee37b8c9"
//$updatedAt
//: 
//"2024-01-28T04:01:25.575+00:00"
//accessedAt
//: 
//"2024-01-28T04:01:25.567+00:00"
//email
//: 
//"test@gmail.com"
//emailVerification
//: 
//false
//labels
//: 
//[]
//name
//: 
//"swegino"
//passwordUpdate
//: 
//"2024-01-28T04:01:25.567+00:00"
//phone
//: 
//""
//phoneVerification
//: 
//f//alse
//prefs
//: 
//{}
//registration
//: 
//"2024-01-28T04:01:25.567+00:00"
//status
//: 
//true