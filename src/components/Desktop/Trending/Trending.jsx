import React, { useState } from 'react'
import './Trending.scss'
import TrendingApi from './Trending'
import { Link } from 'react-router-dom'
import TrendingStarIcon from "../../../assets/icon/TrendingIcon/star.svg"
import TrendingStarIconGreen from "../../../assets/icon/TrendingIcon/star2.svg"
function Trending() {
  const [ratings, setRatings] = useState({})

  // Reytingni yangilash funksiyasi, qaysi karta va qaysi reyting
  const handleRating = (cardId, rate) => {
    setRatings(prev => ({ ...prev, [cardId]: rate }))
  }
  return (
    <div className="trending">
      {TrendingApi.map((trending) =>
        <div className="trending-box">
          <div className="trending-box-title-text-box">
            <div className="trending-box-title">
              {trending.TrendingTitle.map((trendingTitle) =>
                <h1 key={trendingTitle.id}>{trendingTitle.title}</h1>
              )}
            </div>
            <div className="trending-box-category">
              {trending.TrendingCategory.map((trendingCategory) =>
                <Link key={trendingCategory.id} className="trending-box-category-link" >{trendingCategory.category}</Link>
              )}
            </div>
          </div>
          <div className="trending-card">
            {trending.TrendingCard.map((trendingCard) =>
              <div className="trending-box-card" key={trendingCard.id} >
                <div className="trending-box-card-img">
                  <div className="trending-box-card-img" style={{ backgroundImage: `url(${trendingCard.img})` }}>
                    <p style={{ backgroundColor: trendingCard.imgTextColor }}>{trendingCard.imgText}</p>
                  </div>
                  <div className="trending-box-card-hover-feature">
                    {/* <button></button> */}
                  </div>
                </div>
                <div className="trending-box-card-text">
                  <div className="trending-box-box-chair-minimal">
                    <p>{trendingCard.textChair}</p>
                    <h2>{trendingCard.textMinimalChair}</h2>
                  </div>
                  <div className="trending-box-card-price-evaluation">
                    <div className="trending-box-card-price">
                      {trendingCard.chairPice.map((trendingChairPrice) =>
                        <p key={trendingChairPrice.id}>{trendingChairPrice.text}</p>
                      )}
                    </div>
                    <div className="trending-box-card-evaluation">
                      {[1, 2, 3, 4, 5].map((num) => 
                          <img 
                          key={num}
                          src={num <= (ratings[trendingCard.id] || 0) ? TrendingStarIconGreen : TrendingStarIcon} 
                          alt="star" 
                          onClick={() => handleRating(trendingCard.id, num)}
                          style={{ cursor: 'pointer' }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Trending