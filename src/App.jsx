import React from 'react'
import './App.css'
import Plan from '../Pages/ChoosePlan/ChoosePlan'
import Home from '../Pages/HomePage/Home'
import StudentDeal from '../Pages/StudentDeal/StudentDeal'
import HuluPress from '../Pages/HuluPress/HuluPress'
import Billing from '../Pages/Billing/Billing'
import AboutPage from '../Pages/About/AboutPage'
import FX from '../Pages/FX/FX'
import Delicate from '../Pages/FX/AmericanHorrorStories/Delicate'
import CreateAccount from '../Pages/CreateAccount/CreateAccount'
import Profile from './Components/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/student' element={<StudentDeal />}/>
        <Route path='/hulupress' element={<HuluPress />}/>
        <Route path='/manage-subscription' element={<Billing />}/>
        <Route path='/plans' element={<Plan />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/account' element={<CreateAccount />}/>
        <Route path='/fx' element={<FX />}/>
        <Route path='/fx/series' element={<Delicate />} />
        <Route path='/fx/series/:name' element={<Delicate />} />
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/profile/:id' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
