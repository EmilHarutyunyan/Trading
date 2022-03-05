// import {Routes,Route} from "react-router-dom"
// import Header from "./components/Header/Header";
import {Routes,Route} from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Forgot from "./pages/ForgotPassword/Forgot";
import Signup from "./pages/Signup/Signup"
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  return (
    <>
    <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/forgot' element={<Forgot/>} />
          <Route path='/reset' element={<ResetPassword/>} />
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
