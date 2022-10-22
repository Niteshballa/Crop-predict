import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import "../styles/Banner.css"

function Banner() {

    let history = useHistory()

    const cropRedirect = () => {
        history.push("/crop")
    }
    
    return (
        <div className="banner">
            <div className="banner__title">
                <div className="banner__title_head">
                    Crop<font>Predict</font>
                </div>
                <div className="banner__title_tail">
                    <div className="typing">A Machine Learning based Web Application for Crop and Fertilizer Recommendation</div>
                    <div className="banner__buttons">
                        <Button onClick={cropRedirect} className="banner__button cropButton">Crop Recommender</Button>
                    </div>
                    
                    <div>
                        <h3> Major Project PVPSIT </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner