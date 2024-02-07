
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Header/>
   <main className='h-full flex flex-col flex-1 w-full'>
   <Outlet/>
   </main>
   <Footer/>
   </>
  )
}

export default Layout