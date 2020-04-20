import React from 'react'
import './Attractions.scss';
import Footer from './Footer'

class Attractions extends React.Component {
    // state = {}



    render() {
        return (
            <div className="Attractions">
                <h1 className="Attractions__title">Atrakcje BHP</h1>
                <section className="Attractions__txt">

                </section>
                <Footer />
            </div>
        );
    }
}

export default Attractions;

// function Attractions() {
//     return (
//         <div>
//             <h1 className="Attractions__title">Atrakcje BHP</h1>
//             <section className="Attractions__txt">

//             </section>
//             <Footer />
//         </div>
//     )
// }

// export default Attractions
