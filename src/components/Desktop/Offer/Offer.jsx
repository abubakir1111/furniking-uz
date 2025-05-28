import React from 'react'
import "./Offer.scss"
import OfferApi from './Offer.js'

function Offer() {
    return (
        <div className="offer">
            {OfferApi.map((OfferApi) =>
                <div className="offer-box" key={OfferApi.id}>
                    {OfferApi.OffeLeftContent.map((offerLeftContent) =>
                        <div className="offer-left-content" key={offerLeftContent.id}>
                            <div className="offer-left-content-box">
                                <div className="offer-left-content-title">
                                    <h1>{offerLeftContent.offerLeftContentTitle}</h1>
                                    <p>{offerLeftContent.offerLeftStartPrice}</p>
                                </div>
                                <div className="offer-left-content-read-more">
                                    <p>{offerLeftContent.offerLeftReadMore}</p>
                                    <img src={offerLeftContent.offerLeftIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="offer-right-content">
                        {OfferApi.OfferRightContent.map((offerRightContent) =>
                            <div className="offer-right-content-card" key={offerRightContent.id}>
                                <div className="offer-right-content-card-title">
                                    <h1>{offerRightContent.offerRightContentTitle}</h1>
                                    <p>{offerRightContent.offerRightContentDiscount}</p>
                                </div>
                                <div className="offer-right-content-card-read-more">
                                    <p>{offerRightContent.offerRightContentReadMore}</p>
                                    <img src={offerRightContent.offerRightContentIcon} alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Offer