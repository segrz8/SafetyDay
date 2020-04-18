import React from 'react';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Hamburger from './Hamburger';
import Menu from './Menu';

import Main from './Main'
import About from './About'
import Offer from './Offer'
import Attractions from './Attractions'
import Gallery from './Gallery'
import Contact from './Contact'

class App extends React.Component {

	state = {
		menuActive: false,
	}

	handleMenu = () => {
		this.setState({
			menuActive: !this.state.menuActive,
		});
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Hamburger
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<Menu
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<ScrollToTop>
						<Route exact path="/" component={Main} />
						<Route path="/about" component={About} />
						<Route path="/offer" component={Offer} />
						<Route path="/attractions" component={Attractions} />
						<Route path="/gallery" component={Gallery} />
						<Route path="/contact" component={Contact} />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
