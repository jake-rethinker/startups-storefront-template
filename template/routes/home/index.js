import { h, Component } from 'preact';
import style from './style';


const Gate = require('../../assets/gate.jpg');
const CompanyName = 'Company Name';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className={style.home}>
				<div class={style.main}>
				</div>
			</div>
		);
	}
}
