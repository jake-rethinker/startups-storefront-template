import { h, Component } from 'preact';
import style from './style';
import WebSlider from "../../components/slider";
import TeamCard from '../../components/teamcard';
import {
	Grid,
	Cell,
	Card,
	CardHeader,
	CardBody,
	CardImage
} from 'preact-fluid';

const team1 = {
    image: require('../../assets/team/team1.jpg'),
    name: "Drake",
    position: "OVO Sound"
};
const team2 = {
    image: require('../../assets/team/team2.jpg'),
    name: "Jay Z",
    position: "Mos Def"
};
const team3 = {
    image: require('../../assets/team/team3.jpg'),
    name: "2 Chainz",
    position: "Mos Def"
};
const team4 = {
    image: require('../../assets/team/team3.jpg'),
    name: "2 Chainz",
    position: "Mos Def"
};

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamCards: [team4, team4, team4, team4, team4, team4, team4, team4 ]
		};
	}
	renderCards() {
		return this.state.teamCards.map((card) => <TeamCard name={card.name} position={card.position} image={card.image} />);
	}

	render() {
		return (
			<div className={style.home}>
                <h1>Our Team</h1>
				<div class={style.cardholder}>
					{ this.renderCards() }
				</div>

			</div>
		);
	}
}
