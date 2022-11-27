import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShoeForm from "./components/ShoeForm";
import ShoesManList from './components/ShoesManList'; 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditShoe from "./components/EditShoe";

function App() {

  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/create' element={<ShoeForm/>}/>
    <Route path='/' element={<ShoesManList/>}/>
    <Route path='/edit/:id' element={<EditShoe/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
    
  )
}

export default App
