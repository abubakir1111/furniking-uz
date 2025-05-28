import React from 'react'
import HeroSectionNavbar from './HeroSectionNavbar/HeroSectionNavbar.jsx'
import Furniking from './Furniking/Furniking.jsx'
import NavbarFurniking from './NavbarFurniking/AllCollections.jsx'
import Furniture from './Furniture/Furniture.jsx'

function HeroSection() {
    return (
        <div>
            <HeroSectionNavbar />
            <Furniking />
            <NavbarFurniking />
            <Furniture />
        </div>
    )
}

export default HeroSection