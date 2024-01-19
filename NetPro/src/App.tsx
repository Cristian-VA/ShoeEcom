import { Routes, Route } from "react-router-dom";
import Layout from "./Root/Layout/Layout";

import LogInSignUp from "./Auth/Pages/LogInSignUp";
import { Men, Cart, Home, MenSneakers, MenActiveShoes, MenHiking, MenSlipOns, Women, WomenSneakers, WomenActiveShoes, WomenSlipOns, WomenFlats, WomenHiking, Kids, KidsSlipOns, KidsSneakers  } from "./Root/Pages/index";


function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/account/login" element={<LogInSignUp/>}/>
          <Route path="/cart" element={<Cart/>}/>

          <Route path="/collections/men" element={<Men/>}/>
          <Route path="/collections/men-sneakers" element={<MenSneakers/>}/>
          <Route path="/collections/men-active-shoes" element={<MenActiveShoes/>}/>
          <Route path="/collections/men-slip-ons" element={<MenSlipOns/>}/>
          <Route path="/collections/men-hiking" element={<MenHiking/>}/>

          <Route path="/collections/women" element={<Women/>}/>
          <Route path="/collections/women-sneakers" element={<WomenSneakers/>}/>
          <Route path="/collections/women-active-shoes" element={<WomenActiveShoes/>}/>
          <Route path="/collections/women-slip-ons" element={<WomenSlipOns/>}/>
          <Route path="/collections/women-hiking" element={<WomenHiking/>}/>
          <Route path="/collections/women-flats" element={<WomenFlats/>}/>

          <Route path="/collections/kids" element={<Kids/>}/>
          <Route path="/collections/kids-sneakers" element={<KidsSlipOns/>}/>
          <Route path="/collections/kids-slip-ons" element={<KidsSneakers/>}/>

        </Route>
      </Routes>
    </main>
  );
}

export default App;
