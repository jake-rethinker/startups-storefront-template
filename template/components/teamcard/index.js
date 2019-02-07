import { h, Component } from 'preact';
import style from './style';
import {Card, CardHeader, CardImage, Cell, Grid} from "preact-fluid";

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div class={style.menu}>
                <div class={style.card}>
                    <img src={this.props.image} class={style.cardimg} alt={this.props.name} draggable={false} />
                    <h1 className={style.h1}> {this.props.name} </h1>
                    <p className={style.h1}> {this.props.position} </p>
                </div>
            </div>
        );

    }

}

export default TeamCard;
