import React from 'react'
import './Attractions.scss';
import Footer from './Footer'

function Attractions() {
    return (
        <div>
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
                            <li>Bezpieczna droga do pracy i symulatory motoryzacyjne: symulator wypadku dachowania, symulator zderzenia czołowego, waga przeciążenia podczas wypadku, symulator bezpiecznej jazdy samochodem, symulator wybuchu poduszki powietrznej, symulator przeciążeń podczas wypadku dachowania, płyta poślizgowa do treningu jazdy, symulator wymiany koła, symulator zakładania łańcuchów śniegowych, alko gogle, narko gogle, rowerowy tor przeszkód, testy na prawo jazdy, test optymalizacji toru jazdy (talerz z piłką na samochodzie), drift samochodowy na oponach poślizgowych.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Attractions
