import { h, Component } from 'preact';
import style from './style';

import {
	AppBar,
	Button,
} from 'preact-fluid';
class Header extends Component {
	constructor() {
		super();
		this.state ={
			items: ['Home', 'About', 'Login']
		};
	}
	render() {
		const aboutBtn = <a href="/about">About</a>;
		const startBtn = <a href="/get-started">Get Started</a>;
		return (
			<AppBar
			title="Company Name"
			titleStyle={{color: 'white', padding:'0 10px'}}
			rightSection={aboutBtn}
			primary
			/>
		);
	}
}

export default Header;
