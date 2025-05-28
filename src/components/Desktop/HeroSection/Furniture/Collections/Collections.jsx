import React from 'react'
import "./Collections.scss"
import CollectionsApi from './Collections.js'

function Collections() {
    return (
        <div className="collections">
            {CollectionsApi.map((collectionsApi) =>
                <div className="collections-box" key={collectionsApi.id}>
                    {collectionsApi.CollectionTitle.map((collectionsTitle) =>
                        <div className="all-colletions" key={collectionsTitle.id}>
                            <img src={collectionsTitle.CollectionsIcon} alt="" />
                            <h1>{collectionsTitle.CollectionsTitle}</h1>
                        </div>
                    )}
                    <div className="collections-text">
                        {collectionsApi.CollectionsText.map((CollectionsText) =>
                            <div className="collections-text-box">
                                <p key={CollectionsText.id}>{CollectionsText.CollectionsText}</p>
                                <div className="collections-border"></div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Collections