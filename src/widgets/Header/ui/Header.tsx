import { Link } from "react-router-dom"
import style from './Header.module.scss'


export const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.headerContainer}>
				<div className={style.headerBlock}>
					<div className={style.logo}>
						<Link to='/'>
							<img src="/public/assets/headerLogo.svg" alt="headerLogo" />
						</Link>
					</div>
					<div className={style.btn}>
						<Link to='/rating'>Рейтинг</Link>
					</div>
				</div>
				<div className={style.user}>
					<div className={style.userInfo}>
						<span className={style.userName}>Леонов Василий</span>
						<span className={style.userMail}>nagibator@gmail.com</span>
					</div>
					<div className={style.userImg}>
						<img src="/public/assets/foto.png" alt="foto" />
					</div>
					<button className={style.userOut}>
						<img src="/public/assets/userOut.svg" alt="foto" />
					</button>
				</div>
			</div>
		</header>
	)
}