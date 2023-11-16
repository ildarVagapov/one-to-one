import { Link } from "react-router-dom"
import style from './Header.module.scss'
import { Button } from "shared/components"
import { User } from "entities/User/User"


export const Header = () => {


	return (
		<header className={style.header}>
			<div className={style.header__container}>
				<div className={style.header__block}>
					<Link className={style.logo} to='/'>
						<img src="/public/assets/headerLogo.svg" alt="headerLogo" />
					</Link>
					<Link to='/rating'>
						<Button text='Рейтинг' btn='blue' />
					</Link>
				</div>
				<User />
			</div>
		</header>
	)
}