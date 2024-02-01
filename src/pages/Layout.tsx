import React from 'react'
import Dashboard from './Dashboard'
import Home from './Home'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div>  <div className="   flex  ">

            <Dashboard />
            <div className="w-100 flex-1">

                <Navbar />
                <Home />
            </div>

        </div></div>
    )
}

export default Layout