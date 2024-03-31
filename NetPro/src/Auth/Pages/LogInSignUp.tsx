import  { useEffect } from 'react'

import SignInForm from '../components/forms/SignInForm'
import SignUpForm from '../components/forms/SignUpForm'
import { useAuth } from '../components/utils/AuthContext'
import { useNavigate } from 'react-router-dom'

const LogInSignUp = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (user){
      navigate("/")
    }
  }, [])

  return (
    <div className=' flex gap-20  justify-center  w-screen py-6 bg-gray-50 lg:flex-row flex-col items-center '>

      
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default LogInSignUp