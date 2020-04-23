import React from 'react'
import './Contact.scss';

import img7 from '../Img/7.jpg'
import img7S from '../Img/7S.jpg'

function Contact() {
    return (
        <div className="Contact">
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
                    <p>Zaufaj nam - stworzymy wyjątkowy dzień bezpieczeństwa w twojej firmie!</p>
                </div>
            </div>
            <div className="Contact__img">
                <picture>
                    <source media="(min-width: 461px)" srcSet={img7} />
                    <img src={img7S} alt="..." />
                </picture>
            </div>
        </div>
    )
}

export default Contact
