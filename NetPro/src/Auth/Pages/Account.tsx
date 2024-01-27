import React from 'react'
import { useSignOutAccountMutation } from '@/lib/queries/queries&mutations'
import Loader from '@/Root/components/Loader'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
const Account = () => {
    const { mutate: signOut,  isSuccess, isPending } = useSignOutAccountMutation()
    const navigate = useNavigate()

    async function signOutAccount() {
      signOut()
      navigate("/")
    }

   
  return (
    <div className='container'>
        <Button onClick={() => signOutAccount()} >logout</Button>
        
    </div>
  )
}

export default Account