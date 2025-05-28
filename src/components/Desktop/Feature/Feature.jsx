import React from 'react'
import "./Feature.scss"
import FeatureApi from './Feature.js'

function Feature() {
    return (
        <div className="feature">
            {FeatureApi.map((featureApi) =>
                <div className="feature-box" key={featureApi.id}>
                    <div className="feature-icon">
                        <img src={featureApi.icon} alt="" />
                    </div>
                    <div className="feature-text">
                        <h1>{featureApi.title}</h1>
                        <p>{featureApi.price}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Feature