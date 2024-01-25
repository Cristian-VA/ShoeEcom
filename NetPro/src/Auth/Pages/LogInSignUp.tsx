import React from 'react'
import Loader from '@/Root/components/Loader'
import SignInForm from '../components/forms/SignInForm'
import SignUpForm from '../components/forms/SignUpForm'
const LogInSignUp = () => {
  return (
    <div className=' flex gap-20  justify-center  w-screen py-6 bg-gray-50 lg:flex-row flex-col items-center'>


      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default LogInSignUp