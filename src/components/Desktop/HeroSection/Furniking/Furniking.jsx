import React from "react"
import "./Furniking.scss"
import FurnikingApi from "./Furniking"

function Furniking() {
    return (
        <div className="furniking">
            {FurnikingApi.map((furnikingApi) =>
                <div className="furniking-box">
                    {furnikingApi.furnikingTitle.map((furnikingTitle) =>
                        <div className="furniking-title" key={furnikingTitle.id}>
                            <img src={furnikingTitle.titleIcon} alt="" />
                            <h1>{furnikingTitle.title}</h1>
                        </div>
                    )}
                    <div className="furniking-search">
                        {furnikingApi.furnikingInput.map((furnikingInput) =>
                            <input type="text" placeholder={furnikingInput.text} id={furnikingInput.id} />
                        )}
                        {furnikingApi.furnikingCategories.map((furnikingCategories) =>
                            <div className='furniking-categories-search'>
                                <div className="furniking-categories">
                                    <div className="furniking-catgories-border"></div>
                                    <div className="furniking-categories-text">
                                        <p>{furnikingCategories.catogries}</p>
                                        <img src={furnikingCategories.categoriesIcon} alt="" />
                                    </div>
                                </div>
                                <div className="furniking-categories-search-icon">
                                    <button>
                                        <img src={furnikingCategories.searchIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="furniking-icon">
                        {furnikingApi.furnikingIcons.map((furnikingIcons) =>
                            <button>
                                <img src={furnikingIcons.icon} alt="" key={furnikingIcons.id} />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Furniking