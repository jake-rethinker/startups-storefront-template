import { h, Component } from 'preact';
import style from './style';
import Headroom from 'react-headroom';


class Header extends Component {
    constructor() {
        super();
        this.state ={
            items: ['Home', 'About', 'Login']
        };
    }
    render() {
        return (
        	<div class={style.headerdaddy}>
				<Headroom class={style.headroom} wrapperStyle={{ position: 'fixed', left: '0', right: '0', fontsize: '25px', maxHeight: '57px', zIndex: '9000' }}>
					<div className={style.topnav}>
						<a class={style.left} style="float: left" href="/#"> Company Name </a>
						<a class={style.right} href="/get-started">Get Started</a>
						<a className={style.right} href="/about">About</a>
					</div>
				</Headroom>
			</div>
        );
    }
}

export default Header;
