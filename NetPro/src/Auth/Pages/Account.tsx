import React from 'react'
import { useSignOutAccountMutation } from '@/lib/queries/queries&mutations'
import Loader from '@/Root/components/Loader'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import {  useAuth } from '../components/utils/AuthContext'
const Account = () => {
    const navigate = useNavigate()
    const {logoutUser} = useAuth()
    
  

   
  return (
    <div className='container'>
        <Button onClick={() => logoutUser()} >logout</Button>
        
    </div>
  )
}

export default Account