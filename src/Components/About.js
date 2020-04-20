import React from 'react'
import './About.scss';
import Footer from './Footer'

function About() {
    return (
        <div className="About">
            <h1 className="About__title">O nas</h1>
            <section className="About__txt">
                <p>Safety Day to nowatorski projekt firmy Drivemat wspierający firmy w obszarze BHP. Zrealizowaliśmy kilkadziesiąt dni bezpieczeństwa w firmach na terenie całej Polski. Nasze realizacje dotyczyły różnorodnych działów pracowniczych w zakładach produkcyjnych i firmach usługowych.</p>
                <p>Jesteśmy grupą społeczników perfidnie dbających o bezpieczeństwo nie tylko naszych rodzin ale i całej ludzkości. Pasja i chęć niesienia pomocy innym nadały szerszy zasięg naszym działaniom. Udowadniamy, że bezpieczeństwo nie jest obciachowe a nauka BHP, nie musi być nudna. Nikt z nas nie żyję dla siebie, dlatego też bezpieczeństwo jest naszym wspólnym interesem.</p>
                <p>Nasz skład jest zróżnicowany i sami do dzisiaj nie dowierzamy jak on w ogóle powstał. W naszych szeregach znajdują się: inspektorzy BHP, ratownicy medyczni, strażacy, instruktorzy praktycznej nauki zawodu, instruktorzy jazdy, fizjoterapeuci, psychologowie, dietetycy, instruktorzy wspinaczki, instruktorzy samoobrony, menagerowie. Różnorodność naszej grupy to cecha pozwalająca wyprzedzać konkurencje o setki kilometrów przy pomocy siedmiomilowych butów. Szeroki punkt widzenia zagrożeń z perspektywy kilkunastu specjalistów, wpływa na szybką identyfikację potencjalnych problemów i ich naprawę.</p>
                <p>Scenariusz dnia bezpieczeństwa szyjemy na wymiar klienta, by dopasować go idealnie do strategii i celów organizacji. Zaufały nam największe firmy w kraju o rozpoznawalnych markach i produktach – sprawdź sam jakość naszych usług. Safety day znacząco obniża występowanie wypadków w pracy. Człowiek jest największą wartością organizacji. Nie ryzykuj jego bezpieczeństwa, zadzwoń do nas i pozwól nam działać.</p>
            </section>
            <Footer />
        </div>
    )
}

export default About
