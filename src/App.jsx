import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Stats from './Components/Stats'
import Products from './Components/Products';


const getProducts = async () => {
  const res = await fetch("/public/products.json");
  return res.json();
}

function App() {
  const productPromise = getProducts()


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Products productPromise={productPromise}></Products>
        </Suspense>

    </>
  )
}

export default App
