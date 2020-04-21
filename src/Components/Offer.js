import React from 'react'
import './Offer.scss';
import Footer from './Footer'

function Offer() {
    return (
        <div className="Offer">
            <h1 className="Offer__title">Oferta</h1>
            <section className="Offer__txt">
                <p>Oferujemy kompleksową organizację i obsługę dnia bezpieczeństwa w twojej firmie. Safety day jest obchodzony w celu przypomnienia pracownikom o priorytecie działań BHP i poprawie bezpieczeństwa firmy. Pomagamy stworzyć wyjątkowy dzień bezpieczeństwa, który zostanie zapamiętany na długie miesiące. Budujemy stanowiska szkoleniowe związane z bezpieczeństwem w pracy. Tworzymy moduły treningowe by promować BHP podczas praktycznych działań. Safety day nie musi być nudny, a bezpieczeństwo pracowników będzie interesującym tematem podczas tego wyjątkowego dnia.</p>
                <h2 className="Offer__listTitle">Cele organizacji dnia bezpieczeństwa:</h2>
                <ul>
                    <li>doskonalenie procedur BHP,</li>
                    <li>wskazanie zagrożeń,</li>
                    <li>określenie ryzyka,</li>
                    <li>ćwiczenie prawidłowych reakcji i zachowań,</li>
                    <li>szukanie alternatywnych rozwiązań,</li>
                    <li>zwiększenie świadomości pracowników,</li>
                    <li>realizacja założeń HR i CSR.</li>
                </ul>
                <p>Czas prowadzonych zajęć jest ustalany indywidualnie w zależności od charakterystyki działań organizacji. Wysoka dostępność do szkoleń zapewnia nasza mobilność na terenie kraju. Lokalizacja firmy nie jest dla nas żadną przeszkodą. Podczas jednego dnia nasze stanowiska może odwiedzić nawet kilkaset osób. Ilość uczestników zajęć nie jest przez nas ograniczana. Kierujemy się zasadą im więcej tym lepiej! Każda kolejna przeszkolona osoba, zdecydowanie zwiększa szanse na bezwypadkową pracę firmy.</p>
                <h2 className="Offer__listTitle">Tematyka poruszana podczas dnia bezpieczeństwa:</h2>
                <ul>
                    <li>gaszenie substancji niebezpiecznych znajdujących się w zakładzie pracy i w domu</li>
                    <li>komora dymowa, pomoc i ewakuacja w razie pożaru</li>
                    <li>zagrożenia związane z maszynami i pojazdami</li>
                    <li>praca na wysokości</li>
                    <li>wózki widłowe</li>
                    <li>transport na terenie firmy</li>
                    <li>wózki widłowe</li>
                    <li>bezpieczeństwo pieszych</li>
                    <li>ergonomia stanowiska pracy</li>
                    <li>zdrowie odżywianie</li>
                    <li>ćwiczenia relaksacyjne w pracy</li>
                    <li>bezpieczna droga do pracy i symulatory motoryzacyjne</li>
                    <li>dowolna tematyka w zależności od charakterystyki pracy firmy</li>
                </ul>
            </section>
            <Footer />
        </div>
    )
}

export default Offer
