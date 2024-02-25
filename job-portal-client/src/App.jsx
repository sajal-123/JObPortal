import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
export default function App() {
  return (
     <>
     <Navbar/>
     <Outlet/>
     <Footer/>
     </>
  )
}