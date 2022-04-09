import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Rating({rate, reviewsNumber}) {
  return (
    <>
        {
        (() => {
            let code = []
            let ratee = rate /2
            for (let i = 0; i < 5 ; i++) {
                if(i < ratee && ratee< i+1) {
                   code.push(<span key={i} ><BsStarHalf className=' star' /></span>)
                } else if (i < ratee) {
                    code.push(<span key={i} ><BsStarFill className=' star' /></span>)
                } else {
                    code.push(<span key={i}><BsStar className=' star' /></span>)
                }
            } 
            code.push(' '+rate+' of '+reviewsNumber)
            return code
        })()
        }     
    </>
  )
}

export default Rating