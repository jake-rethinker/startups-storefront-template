import { h, Component } from 'preact';
import style from './style';
import WebSlider from "../../components/slider";
import {
	Grid,
	Cell,
	Card,
	CardHeader,
	CardBody,
	CardImage
} from 'preact-fluid';

const team1 = require('../../assets/team/team1.jpg');
const team2 = require('../../assets/team/team2.jpg');
const team3 = require('../../assets/team/team3.jpg');
const team4 = require('../../assets/team/team4.png');
const Team = require('../../assets/team.jpg');

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className={style.home}>
				<Grid columns="repeat(auto-fit, minmax(125px, 2fr))" gap="50px">
					<Cell width={1}>
						<Card>
							<CardImage
								class={style.teamimg}
							src={team1}
							overlay={{
								title: "Drake",
								subtitle:"OVO Sound"
							}
							}
							/>
							<CardHeader
							title="First Last"
							subtitle="Job Title"
							/>
						</Card>
					</Cell>
					<Cell width={1}>
						<Card>
							<CardImage
								class={style.teamimg}
								src={team2}
								overlay={{
									title: "Jay-Z",
									subtitle:"Def Jam Recordings"
								}
								}
							/>
							<CardHeader
								title="First Last"
								subtitle="Job Title"
							/>
						</Card>
					</Cell>
					<Cell width={1}>
						<Card>
							<CardImage
								class={style.teamimg}
								src={team3}
								overlay={{
									title: "2 Chainz",
									subtitle:"Def Jam Recordings"
								}
								}
							/>
							<CardHeader
								title="First Last"
								subtitle="Job Title"
							/>
						</Card>
					</Cell>
				</Grid>

			</div>
		);
	}
}
