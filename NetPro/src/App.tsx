import { Routes, Route } from "react-router-dom";
import Layout from "./Root/Layout/Layout";
import Account from "./Auth/Pages/Account";
import LogInSignUp from "./Auth/Pages/LogInSignUp";
import { Men, Cart, Home, MenSneakers, MenActiveShoes, MenHiking, MenSlipOns, Women, WomenSneakers, WomenActiveShoes, WomenSlipOns, WomenFlats, WomenHiking, Kids, KidsSlipOns, KidsSneakers, MenAccesories, MenBelts, MenBriefcase, MenWallets, WomenAccesories, WomenBags, WomenBelts, WomenWallets, ProductPage  } from "./Root/Pages/index";
import { Toaster } from "@/components/ui/toaster"
import PrivateRoutes from "./Auth/components/utils/PrivateRoutes";
import RootLayout from "./Root/Pages/RootLayout";
import ProductPageSkeleton from "./Root/components/shop/ProductPageSkeleton";
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
          <Route path="/collections/men" element={<Men/>}/>
          <Route path="/collections/men-sneakers" element={<MenSneakers/>}/>
          <Route path="/collections/men-active-shoes" element={<MenActiveShoes/>}/>
          <Route path="/collections/men-slip-ons" element={<MenSlipOns/>}/>
          <Route path="/collections/men-hiking" element={<MenHiking/>}/>
          </Route>
          <Route path="/collections/men-sneakers/:id" element={<ProductPage/>}/>

          <Route element={<RootLayout category="menAc"/>}>
          <Route path="/collections/men-accesories" element={<MenAccesories/>}/>
          <Route path="/collections/men-belts" element={<MenBelts/>}/>
          <Route path="/collections/men-briefcases" element={<MenBriefcase/>}/>
          <Route path="/collections/men-wallets" element={<MenWallets/>}/>
          </Route>

          <Route element={<RootLayout category="women"/>}>
          <Route path="/collections/women" element={<Women/>}/>
          <Route path="/collections/women-sneakers" element={<WomenSneakers/>}/>
          <Route path="/collections/women-active-shoes" element={<WomenActiveShoes/>}/>
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
