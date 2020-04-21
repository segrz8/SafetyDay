import React from 'react'
import './Footer.scss';

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer__flexContainer">
                <div className="Footer__flexChild">
                    <h1>KONTAKT</h1>
                    <div className="Footer__part">
                        <p>tel: 796 565 888</p>
                        <a target="_blank" rel="noopener noreferrer" href="mailto: biuro@polskievent.pl">
                            <p>email: biuro@polskievent.pl</p>
                        </a>
                    </div>
                </div>
                <div className="Footer__flexChild">
                    <div className="Footer__part">
                        <p>Drivemat</p>
                        <p>Wilamowicka 17</p>
                        <p>32-600 Rajsko</p>
                        <p>NIP: 549 238 05 76</p>
                    </div>
                </div>
            </div>
            <div className="Footer__part bold">
                <p>Zaufaj nam - stwórzmy wyjątkowy dzień bezpieczeństwa w twojej firmie!</p>
            </div>
            <div className="Footer__copywright">
                <p>Copyright © 2020 Drivemat - wszelkie prawa zastrzeżone</p>
            </div>
        </div>
    )
}

export default Footer
