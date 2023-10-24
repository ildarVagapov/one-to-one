import { Link } from "react-router-dom"
import style from './Header.module.scss'
import { User } from "./components/User/User"


export const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.headerContainer}>
				<div className={style.headerBlock}>
					<Link className={style.logo} to='/'>
						<img src="/public/assets/headerLogo.svg" alt="headerLogo" />
					</Link>
					<Link className={style.btn} to='/rating'>Рейтинг</Link>
				</div>
				<User />
			</div>
		</header>
	)
}