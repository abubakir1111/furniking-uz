import React from 'react'
import "./FurnitureContent.scss"
import FurnitureContentApi from './FurnitureContent'

function FurnitureContent() {
  return (
    <div className="furniture-content">
      {FurnitureContentApi.map((furniturContentApi) =>
        <div className="furniture-content-box" key={furniturContentApi.id}>
          {furniturContentApi.FurnitureContentTitle.map((furnitureContentTitleApi) =>
            <div className="furniture-content-title" key={furnitureContentTitleApi.id}>
              <div className="furniture-content-collections-year-title">
                <p>{furnitureContentTitleApi.collectionYearText}</p>
                <h1>{furnitureContentTitleApi.dreamFurnitureText}</h1>
              </div>
              <div className="furniture-content-button">
                <p>{furnitureContentTitleApi.FurnitureDicountText}</p>
                <button>{furnitureContentTitleApi.FurnitureBtnText}</button>
              </div>
            </div>
          )}
          <div className="furniture-content-img">
            {furniturContentApi.FurnitureContentImg.map((furnitureContentImg) =>
              <img src={furnitureContentImg.img} alt="" key={furnitureContentImg.id} />
            )}
          </div>
          <div className="furniture-content-card">
            {furniturContentApi.FurnitureContentCard.map((furnitureContentCard) =>
              <div className="furniture-content-card-box">
                <img src={furnitureContentCard.img} alt="" />
                <div className="furniture-content-card-box-text">
                  <p>{furnitureContentCard.price}</p>
                  <p>{furnitureContentCard.furnitureContenCardText}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default FurnitureContent