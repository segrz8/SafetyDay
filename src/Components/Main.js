import React from 'react'
import './Main.scss';
import { Link } from 'react-router-dom';

import img1 from '../Img/exit.jpg'
import img1S from '../Img/exitS.jpg'

function Main() {
    return (
        <div className="Main">
            <picture>
                <source media="(min-width: 461px)" srcSet={img1} />
                <img src={img1S} alt="..." />
            </picture>
            <h3 className="Main__logo">Safety Day</h3>
            <div className="Main__txtContainer">
                <p>Zwiększ ochronę firmy organizując</p>
                <h1>Dzień bezpieczeństwa</h1>
                <div className="Main__btnOffer">
                    <Link to='/offer'>Oferta</Link>
                </div>
            </div>
        </div>
    )
}

export default Main
