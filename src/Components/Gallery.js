import React from 'react'
import './Gallery.scss';
import Footer from './Footer'

import img1 from '../Img/Dzień bezpieczeństwa na magazynie.jpg'
import img2 from '../Img/Dzień bezpieczeństwa wózki widłowe.jpg'
import img3 from '../Img/Pierwsza pomoc poszkodowanym.jpg'
import img4 from '../Img/Pierwsza pomoc stanowisko wypadku.jpg'
import img5 from '../Img/Resuscytacja BHP.jpg'
import img6 from '../Img/Safety day  gaszenie pojazdu.jpg'
import img7 from '../Img/Safety day akcja ratownicza i rozcinanie pojazdu.jpg'
import img8 from '../Img/Safety day pierwsza pomoc na miejscu wypdku.jpg'
import img9 from '../Img/Safety day symulator zderzenia i dachowania.jpg'
import img10 from '../Img/Safety day symulator zderzenia i refleksomierz.jpg'
import img11 from '../Img/Safety day symulatory dachowania.jpg'
import img12 from '../Img/Safety day wyciaganie poszkodowanego.jpg'
import img13 from '../Img/Safety day zadymione pomieszczenie.jpg'
import img14 from '../Img/Safety day.jpg'
import img15 from '../Img/Gaszenie pożaru safety day.jpg'

import img1S from '../Img/Dzień bezpieczeństwa na magazynieS.jpg'
import img2S from '../Img/Dzień bezpieczeństwa wózki widłoweS.jpg'
import img3S from '../Img/Pierwsza pomoc poszkodowanymS.jpg'
import img4S from '../Img/Pierwsza pomoc stanowisko wypadkuS.jpg'
import img5S from '../Img/Resuscytacja BHPS.jpg'
import img6S from '../Img/Safety day  gaszenie pojazduS.jpg'
import img7S from '../Img/Safety day akcja ratownicza i rozcinanie pojazduS.jpg'
import img8S from '../Img/Safety day pierwsza pomoc na miejscu wypdkuS.jpg'
import img9S from '../Img/Safety day symulator zderzenia i dachowaniaS.jpg'
import img10S from '../Img/Safety day symulator zderzenia i refleksomierzS.jpg'
import img11S from '../Img/Safety day symulatory dachowaniaS.jpg'
import img12S from '../Img/Safety day wyciaganie poszkodowanegoS.jpg'
import img13S from '../Img/Safety day zadymione pomieszczenieS.jpg'
import img14S from '../Img/Safety dayS.jpg'
import img15S from '../Img/Gaszenie pożaru safety dayS.jpg'

const imgSet = [
    { id: 0, path: img1, pathS: img1S, },
    { id: 1, path: img2, pathS: img2S, },
    { id: 2, path: img3, pathS: img3S, },
    { id: 3, path: img4, pathS: img4S, },
    { id: 4, path: img5, pathS: img5S, },
    { id: 5, path: img6, pathS: img6S, },
    { id: 6, path: img7, pathS: img7S, },
    { id: 7, path: img8, pathS: img8S, },
    { id: 8, path: img9, pathS: img9S, },
    { id: 9, path: img10, pathS: img10S, },
    { id: 10, path: img11, pathS: img11S, },
    { id: 11, path: img12, pathS: img12S, },
    { id: 12, path: img13, pathS: img13S, },
    { id: 13, path: img14, pathS: img14S, },
    { id: 14, path: img15, pathS: img15S, },
]

const photos = imgSet.map(item => {
    return (
        <div className={"Gallery__img"} key={item.id}>
            <picture>
                <source media="(min-width: 461px)" srcSet={item.path} />
                <img src={item.pathS} alt="..." />
            </picture>
        </div >
    )
})

function Gallery() {
    return (
        <div className="Gallery">
            <h1 className="Gallery__title">Galeria</h1>
            <section className="Gallery__imgs">
                {photos}
            </section>
            <Footer />
        </div>
    )
}

export default Gallery
