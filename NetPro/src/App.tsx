import { Routes, Route } from "react-router-dom";
import Layout from "./Root/Layout/Layout";
import Home from "./Root/Pages/Home";

function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
