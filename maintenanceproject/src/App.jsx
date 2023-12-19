import { useState } from 'react'

import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinConsumed from './user/CoinConsumed';
import { StyledEngineProvider } from '@mui/material/styles';
import  {Header} from './NavBar/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
	<>
 
	<BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
 
    
    
    
            <Routes>
           
            <Route path="/CoinConsumed" element={<CoinConsumed/>} /> 
            <Route path="/NavBar" element={<Header/>} /> 
            </Routes>
          
		    </BrowserRouter>
       
			</>

  )
}

export default App
