import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Stats from './Components/Stats'
import Products from './Components/Products';
import Cart from './Components/Cart'
import Main from './Components/Main'
import Steps from './Components/Steps'
import Pricing from './Components/Pricing'


const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
}



function App() {
  const productPromise = getProducts();

  const [isActiveTab, setIsActiveTab] = useState("products");
   const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Stats></Stats>


      <Suspense>
        <Main cart={cart} setCart={setCart} setIsActiveTab={setIsActiveTab} isActiveTab={isActiveTab} productPromise={productPromise}></Main>
     
     </Suspense>
        
      <Steps></Steps>
      <Pricing></Pricing>

    </>
  )
}

export default App
