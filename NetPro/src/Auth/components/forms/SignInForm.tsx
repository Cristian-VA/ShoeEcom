
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignInSchema } from "@/lib/validation"
import Loader from "@/Root/components/Loader"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

import { useSignInAccountMutation } from "@/lib/queries/queries&mutations"
import { useUserContext } from "@/context/AuthContext"

const SignInForm = () => {

 const { toast } = useToast()
 const { checkAuthUser, isLoading } = useUserContext()
 
 const navigate= useNavigate()
  


const { 
  mutateAsync: signInAccount , 
  isPending: isSigningIn
} = useSignInAccountMutation()

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "test9@gmail.com",
      password: "test1234",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignInSchema>) {
   

  const session = await signInAccount({
    email: values.email,
    password: values.password
  })

  if (!session){
    return toast ({title: "Log in failed. Please try Again"})
  }
    const isLoggedIn = await checkAuthUser()

    if (isLoggedIn){
      form.reset()

      navigate("/")
    } else {
     return toast({title: "Log in failed. Please try again"})
    }
  }

 

  return (
    <>
    {isLoading? (
      ""
    ):(
      <Form {...form}>
        <div className=" flex justify-center items-center flex-col max-w-[450px] w-full px-5">
          
  
         
        

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-4  ">     

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type = "text" placeholder="Vibey@gmail.com" className="text-slate-800 h-12 bg-blue-50 border-none rounded-[8px] placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-slate-100" {...field} />
                    </FormControl>
                    <FormMessage className="text-rose-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type = "password" placeholder="••••••••" className="text-slate-800 h-12 bg-blue-50 border-none rounded-[8px] placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-slate-100" {...field} />
                    </FormControl>
                    <FormMessage className="text-rose-500" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="h-12 bg-blue-500 px-5 text-white flex gap-2 rounded-[8px] mt-2 hover:bg-blue-400 transition">
                {isSigningIn? (
                  ""
                ): "Log in"}
              </Button>
              <div className="flex gap-2 mx-auto">
                <p className="small text-slate-500 "> Don't have an account</p>
                <Link to="/sign-up" className="small text-blue-500"> Sign up now!</Link>
              </div>
         </form>
      </div>
    </Form>
    )}
    
  </>
  )
}

export default SignInForm