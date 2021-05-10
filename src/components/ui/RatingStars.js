import { StarBorder, Star } from '@material-ui/icons'
import React from 'react'
import Rating from 'react-rating'

function RatingStars(props) {
    
    return (
        <div>
            <Rating emptySymbol={<StarBorder/>} fullSymbol={<Star/>} fractions="2" {...props} ></Rating>        
        </div>
    )
}

export default RatingStars
