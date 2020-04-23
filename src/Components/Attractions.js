import React from 'react'
import './Attractions.scss';
import Footer from './Footer'

function Attractions() {
    return (
        <>
            <div className="Attractions">
                <h1 className="Attractions__title">Atrakcje BHP</h1>
                <section className="Attractions__items">
                    <div className="Attractions__item">
                        <div className="Attractions__icon">
                            <i className="fas fa-fire"></i>
                        </div>
                        <div className="Attractions__itemTxt">
                            <h2>Strefa przeciwpożarowa</h2>
                            <ul>
                                <li>Gaszenie pożaru i substancji niebezpiecznych znajdujących się w pracy</li>
                                <li>Komora dymowa, trening ewakuacji z zadymionego pomieszczenia i udzielania pierwszej pomocy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Attractions__item">
                        <div className="Attractions__icon">
                            <i className="fas fa-desktop"></i>
                        </div>
                        <div className="Attractions__itemTxt">
                            <h2>Strefa bezpiecznych stanowisk</h2>
                            <ul>
                                <li>Zagrożenia związane z maszynami i pojazdami</li>
                                <li>Praca na wysokości</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Attractions__item">
                        <div className="Attractions__icon">
                            <i className="fas fa-apple-alt"></i>
                        </div>
                        <div className="Attractions__itemTxt">
                            <h2>Strefa zdrowych pracowników</h2>
                            <ul>
                                <li>Ergonomia stanowiska pracy – zajęcia z fizjoterapeutą</li>
                                <li>Zdrowe odżywianie – zajęcia z dietetykiem</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Attractions__item">
                        <div className="Attractions__icon">
                            <i className="fas fa-hard-hat"></i>
                        </div>
                        <div className="Attractions__itemTxt">
                            <h2>BHP w pracy</h2>
                            <ul>
                                <li>Eksperymenty i testy sprzętu BHP – pokazy funkcji środków ochronny indywidualnej</li>
                                <li>Testy psychologiczne dla sprawdzenia kondycji psychomotorycznej pracowników</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Attractions__item">
                        <div className="Attractions__icon">
                            <i className="fas fa-car-alt"></i>
                        </div>
                        <div className="Attractions__itemTxt">
                            <h2>Bezpieczeństwo w transporcie</h2>
                            <ul>
                                <li className="bold">Bezpieczna droga do pracy i symulatory motoryzacyjne:</li>
                                <ul>
                                    <li>symulator wypadku dachowania</li>
                                    <li>symulator zderzenia czołowego</li>
                                    <li>waga przeciążenia podczas wypadku</li>
                                    <li>symulator bezpiecznej jazdy samochodem</li>
                                    <li>symulator wybuchu poduszki powietrznej</li>
                                    <li>symulator przeciążeń podczas wypadku dachowania</li>
                                    <li>płyta poślizgowa do treningu jazdy</li>
                                    <li>symulator wymiany koła</li>
                                    <li>symulator zakładania łańcuchów śniegowych</li>
                                    <li>alko gogle</li>
                                    <li>narko gogle</li>
                                    <li>rowerowy tor przeszkód</li>
                                    <li>testy na prawo jazdy</li>
                                    <li>test optymalizacji toru jazdy</li>
                                    <li>drift samochodowy na oponach poślizgowych</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Attractions
