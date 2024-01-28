import { z } from "zod"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpSchema } from "@/lib/validation"
import { Link } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"

const SignUpForm = () => {

  const {registerUser} = useAuth()

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
   console.log(values)

   const name = values.name
   const username = values.username
   const email = values.email
   const password = values.password

   const userInfo = {name, username, email, password}
   registerUser(userInfo)
  }

  

  



 

  return (
   
    
    
      <Form {...form}>
        <div className=" flex justify-center items-center flex-col max-w-[450px] w-full px-5 bg-inherit">
          <div className="flex gap-4">
                
          </div>
  
           <h1 className=" mr-auto text-[28px] font-bold bg-inherit"> CREATE AN ACCOUNT</h1>

          
        

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-4 bg-inherit  mb-auto mt-4">
             <FormField
              control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="bg-inherit">
                    <FormLabel className="bg-inherit"  >Name</FormLabel>
                    <FormControl>
                      <Input type = "text" placeholder="Enter your first name" className="input-white" {...field} />
                    </FormControl>
                    <FormMessage className="text-rose-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username" // using the parameters of the sign up schema in the validation index
                render={({ field }) => (
                  <FormItem className="bg-inherit">
                    <FormLabel className="bg-inherit">Username</FormLabel>
                    <FormControl>
                      <Input type = "text" placeholder="Enter your Username" className="input-white" {...field} />
                    </FormControl>
                    <FormMessage className="text-rose-500"/>
                  </FormItem>
                )}
              />

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
              <Button type="submit" className="h-12 btn-black uppercase">
                Register
              </Button>
             
         </form>
      </div>
    </Form>
  
    
  )
}

export default SignUpForm
