import './App.css'
import Nav from './components/nav'
import Banner from './components/banner'
import ExploreTechnologies from './components/ExploreTechnologies/ExploreTechnologies'
import type { technologyType } from './type'
import { Suspense, useState } from 'react'
import Footer from './components/footer'
import FooterLower from './components/footerLower'

function App() {
 const fetchData=async ():Promise<technologyType[]>=>{
  const response=await fetch("/data.json");
  const data=response.json();
  return data;
 }
   const [promiseData]=useState(()=>fetchData());
  
  return (
    <div className="container mx-auto px-20">
         <Nav></Nav>
        <Banner></Banner>
        <Suspense fallback={<p>Loading...</p>}> 

           <ExploreTechnologies promiseData={promiseData}></ExploreTechnologies>
        </Suspense>

        <Footer></Footer>
        <FooterLower></FooterLower>
       
    </div>
   
  )
}

export default App
