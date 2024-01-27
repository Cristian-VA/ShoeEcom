
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignInSchema } from "@/lib/validation"
import { Link } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"

const SignInForm = () => {
  const {loginUser} = useAuth()


  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "test9@gmail.com",
      password: "chit55vega",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignInSchema>) {
   console.log(values)
   const email = values.email
    const password = values.password
    
    const userInfo = {email, password}

    loginUser(userInfo)
  }

 

  return (
    <>
   
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
                Sign In
              </Button>
              <div className="flex gap-2 mx-auto">
                <p className="small text-slate-500 "> Don't have an account</p>
                <Link to="/sign-up" className="small text-blue-500"> Sign up now!</Link>
              </div>
         </form>
      </div>
    </Form>
    
    
  </>
  )
}

export default SignInForm