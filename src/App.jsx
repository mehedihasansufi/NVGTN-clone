
import { Suspense } from 'react'
import './App.css'
import Hero from './components/homePage/hero/Hero'
import Navbar from './components/homePage/navbar/Navbar'
import Release_feature from './components/homePage/Release_feature/Release_feature'


const NewReleasePromise=fetch('new_release.json').then(res=> res.json())

function App() {
 

  return (
   <>
   
    <Navbar></Navbar>
    <Hero></Hero>
   <Suspense>
       <Release_feature NewReleasePromise={NewReleasePromise}></Release_feature>
   </Suspense>

    <div className='mb-10'></div>
   
   </>
  )
}

export default App
