import { Link } from "react-router-dom"
import style from './FeedBack.module.scss'

export const FeedBackPage = () => {

	return (
		<>
			<div className={style.feedback}>
				<div className={style.header}>
					<div className={style.header__item}>
						<img src="/public/assets/calendar.svg" alt="" />
						11.01.2023 10:00 MSK
					</div>
					<div className={style.header__item}>
						<img src="/public/assets/user.svg" alt="" />
						Артем Кашаков
					</div>
					<div className={style.header__item}>
						<img src="/public/assets/database.svg" alt="" />
						html
					</div>
					<div className={style.header__item}>
						<img src="/public/assets/award.svg" alt="" />
						midle
					</div>
					<Link className={style.header__btn} to='/'>Выйти</Link>
				</div>
			</div >
		</>
	)
}