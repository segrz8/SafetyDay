import React from 'react'
import './Gallery.scss';
import Footer from './Footer'

import img1 from '../Img/1.jpg'
import img2 from '../Img/2.jpg'
import img3 from '../Img/3.jpg'
import img4 from '../Img/4.jpg'
import img5 from '../Img/5.jpg'
import img6 from '../Img/6.jpg'
import img7 from '../Img/7.jpg'
import img8 from '../Img/8.jpg'
import img9 from '../Img/9.jpg'
import img10 from '../Img/10.jpg'
import img11 from '../Img/11.jpg'
import img12 from '../Img/12.jpg'
import img13 from '../Img/13.jpg'
import img14 from '../Img/14.jpg'
import img15 from '../Img/15.jpg'

import img1S from '../Img/1S.jpg'
import img2S from '../Img/2S.jpg'
import img3S from '../Img/3S.jpg'
import img4S from '../Img/4S.jpg'
import img5S from '../Img/5S.jpg'
import img6S from '../Img/6S.jpg'
import img7S from '../Img/7S.jpg'
import img8S from '../Img/8S.jpg'
import img9S from '../Img/9S.jpg'
import img10S from '../Img/10S.jpg'
import img11S from '../Img/11S.jpg'
import img12S from '../Img/12S.jpg'
import img13S from '../Img/13S.jpg'
import img14S from '../Img/14S.jpg'
import img15S from '../Img/15S.jpg'

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
        <>
            <div className="Gallery">
                <h1 className="Gallery__title">Galeria</h1>
                <section className="Gallery__imgs">
                    {photos}
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Gallery
