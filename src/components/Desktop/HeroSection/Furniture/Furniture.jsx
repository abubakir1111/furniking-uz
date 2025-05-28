import React from 'react'
import "./Furniture.scss"
import Collections from './Collections/Collections.jsx'
import FurnitureContent from './FurnitureContent/FurnitureContent.jsx'

function Furniture() {
  return (
    <div className="furniture">
        <div className="furniture-box">
            <Collections />
            <FurnitureContent />  
        </div>
    </div>
  )
}

export default Furniture