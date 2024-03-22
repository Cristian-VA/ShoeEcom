import { Routes, Route } from "react-router-dom";
import Layout from "./Root/Layout/Layout";
import Account from "./Auth/Pages/Account";
import LogInSignUp from "./Auth/Pages/LogInSignUp";
import { Cart, MenCollection, Home,  ProductPage  } from "./Root/Pages/index";
import { Toaster } from "@/components/ui/toaster"
import PrivateRoutes from "./Auth/components/utils/PrivateRoutes";
import RootLayout from "./Root/Pages/RootLayout";
import { FilterProvider } from "./Context/FilterContext";
import NewArrivalsMen from "./Root/Pages/NewArrivalsMen";
function App() {
  return (
    <FilterProvider>
    <main className="flex min-h-screen flex-col justify-between items-center">
      
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          < Route path="/new-arrivals/men" element={<NewArrivalsMen/>}/>
          <Route path="/account/login" element={<LogInSignUp/>}/>

          <Route element={<PrivateRoutes/>}>
          <Route path="/account" element={<Account/>}/>
          </Route>

          <Route path="/cart" element={<Cart/>}/>

          <Route element={<RootLayout/>}>
            <Route path="/collections/:category" element={<MenCollection/>}/>
          </Route>
          <Route path="/collections/:category/:id" element={<ProductPage/>}/>

        </Route>
       

      </Routes>
      <Toaster />
      
    </main>
    </FilterProvider>
  );
}

export default App;
