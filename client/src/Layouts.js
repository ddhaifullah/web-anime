import React from 'react'
import NavigationBar from './Layouts/Navbar/NavigationBar'

const Layouts = ({ children }) => {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    )
}

export default Layouts