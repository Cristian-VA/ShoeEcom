import { Routes, Route } from "react-router-dom";
import Layout from "./Root/Layout/Layout";
import Account from "./Auth/Pages/Account";
import LogInSignUp from "./Auth/Pages/LogInSignUp";
import { Cart, MenCollection, Home,  Women, WomenSneakers, WomenActiveShoes, WomenSlipOns, WomenFlats, WomenHiking, Kids, KidsSlipOns, KidsSneakers, MenAccesories, MenBelts, MenBriefcase, MenWallets, WomenAccesories, WomenBags, WomenBelts, WomenWallets, ProductPage  } from "./Root/Pages/index";
import { Toaster } from "@/components/ui/toaster"
import PrivateRoutes from "./Auth/components/utils/PrivateRoutes";
import RootLayout from "./Root/Pages/RootLayout";

function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/account/login" element={<LogInSignUp/>}/>

          <Route element={<PrivateRoutes/>}>
          <Route path="/account" element={<Account/>}/>
          </Route>

          <Route path="/cart" element={<Cart/>}/>

          <Route element={<RootLayout category="men"/>}>
          <Route path="/collections/:category" element={<MenCollection/>}/>

          </Route>
          <Route path="/collections/:category/:id" element={<ProductPage/>}/>

          <Route element={<RootLayout category="menAc"/>}>
          <Route path="/collections/men-accesories" element={<MenAccesories/>}/>
          <Route path="/collections/men-belts" element={<MenBelts/>}/>
          <Route path="/collections/men-briefcases" element={<MenBriefcase/>}/>
          <Route path="/collections/men-wallets" element={<MenWallets/>}/>
          </Route>

          <Route element={<RootLayout category="women"/>}>
          <Route path="/collections/women" element={<Women/>}/>
          <Route path="/collections/women-sneakers" element={<WomenSneakers/>}/>
          <Route path="/collections/women-active" element={<WomenActiveShoes/>}/>
          <Route path="/collections/women-slip-ons" element={<WomenSlipOns/>}/>
          <Route path="/collections/women-hiking" element={<WomenHiking/>}/>
          <Route path="/collections/women-flats" element={<WomenFlats/>}/>
          </Route>

          <Route element={<RootLayout category="womenAc"/>}>
          <Route path="/collections/women-accesories" element={<WomenAccesories/>}/>
          <Route path="/collections/women-belts" element={<WomenBelts/>}/>
          <Route path="/collections/women-bags" element={<WomenBags/>}/>
          <Route path="/collections/women-wallets" element={<WomenWallets/>}/>
          </Route>

          <Route element={<RootLayout category="kids"/>}>
          <Route path="/collections/kids" element={<Kids/>}/>
          <Route path="/collections/kids-sneakers" element={<KidsSneakers/>}/>
          <Route path="/collections/kids-slip-ons" element={<KidsSlipOns/>}/>
          </Route>

        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
