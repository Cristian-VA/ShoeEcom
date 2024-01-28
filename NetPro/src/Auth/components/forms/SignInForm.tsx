
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
        <div className=" flex justify-center items-center flex-col max-w-[450px] w-full px-5 bg-transparent mb-auto mt-4">
          
  
         <h1 className="mr-auto text-[28px] font-bold bg-inherit">LOGIN</h1>
        

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-4 bg-inherit ">     

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="bg-inherit">
                    <FormLabel className="bg-inherit">Email</FormLabel>
                    <FormControl>
                      <Input type = "text" placeholder="Vibey@gmail.com" className="input-white" {...field} />
                    </FormControl>
                    <FormMessage className="text-rose-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="bg-inherit">
                    <FormLabel className="bg-inherit">Password</FormLabel>
                    <FormControl>
                      <Input type = "password" placeholder="••••••••" className="input-white" {...field} />
                    </FormControl>
                    <FormMessage className="text-rose-500" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="btn-black uppercase  h-12">
                Log In
              </Button>

              <div className="flex gap-2 mx-auto bg-inherit">
                <p className="font-semibold  bg-inherit cursor-pointer hover:underline"> FORGOT YOUR PASSWORD?</p>
              </div>
         </form>
      </div>
    </Form>
    
    
  </>
  )
}

export default SignInForm