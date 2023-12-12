import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Articles from '../pages/Articles'
import Home from '../pages/Home'
import Users from '../pages/Users'

function Navbar() {
  
  const pathAccueil = '/home'
  const pathArticles = '/articles'
  const pathUtilisateurs = '/users'
  return (
    <>
    <Router>
        <nav class="maNavBar">
            <ul>
                <li><Link to={pathAccueil}>Home</Link></li>
                <li><Link to={pathArticles}>Articles</Link></li>
                <li><Link to={pathUtilisateurs}>Users</Link></li>
            </ul>
        </nav>

      <Routes>
        <Route path={pathAccueil} element= {<Home/>}/>
        <Route path={pathArticles} element= {<Articles/>}/>
        <Route path={pathUtilisateurs} element={<Users/>} />
      </Routes>
    </Router>
    </>
  )
}

export default Navbar