import React from 'react'
import './Contact.scss';

import img1 from '../Img/Safety day akcja ratownicza i rozcinanie pojazdu.jpg'

function Contact() {
    return (
        <div>
            <h1 className="Contact__title">Kontakt</h1>
            <div className="Contact__txt">
                <div className="Contact__part">
                    <p>tel: 796 565 888</p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto: biuro@polskievent.pl">
                        <p>email: biuro@polskievent.pl</p>
                    </a>
                </div>
                <div className="Contact__part">
                    <p>Drivemat</p>
                    <p>Wilamowicka 17</p>
                    <p>32-600 Rajsko</p>
                    <p>NIP: 549 238 05 76</p>
                </div>
                <div className="Contact__part bold">
                    <p>Zaufaj nam - stwórzmy wyjątkowy dzień bezpieczeństwa w twojej firmie!</p>
                </div>
            </div>
            <div className="Contact__img">
                <picture>
                    <source media="(min-width: 461px)" srcSet={img1} />
                    <img src={img1} className="thumbnail" alt="bus" />
                </picture>
            </div>
        </div>
    )
}

export default Contact