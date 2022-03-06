// import {Routes,Route} from "react-router-dom"
// import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Forgot from "./pages/ForgotPassword/Forgot";
import Signup from "./pages/Signup/Signup";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Competitions from "./pages/Competitions/Competitions";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import Faq from "./pages/Faq/Faq";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='forgot-password' element={<Forgot />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='competitions' element={<Competitions />} />
          <Route path='what-we-do' element={<WhatWeDo />} />
          <Route path='faq' element={<Faq />} />
        </Route>
        {/* <Route path='/signup' element={<Signup/>} /> */}
        {/* <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <Checkout/>
                </PrivateRoute>
              }
            />
          <Route path='*' element={<Error/>}/> */}
      </Routes>
    </>
  );
}

export default App;
