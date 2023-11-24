import { Link } from 'react-router-dom'
import style from './HeaderFeedback.module.scss'
import { Button } from 'shared/components'



export const HeaderFeedback = () => {



	return (
		<ul className={style.header}>
			<li className={style.header__item}>
				<img src="/public/assets/calendar.svg" alt="" />
				11.01.2023 10:00 MSK
			</li>
			<li className={style.header__item}>
				<img src="/public/assets/user.svg" alt="" />
				Артем Кашаков
			</li>
			<li className={style.header__item}>
				<img src="/public/assets/database.svg" alt="" />
				html
			</li>
			<li className={style.header__item}>
				<img src="/public/assets/award.svg" alt="" />
				midle
			</li>
			<Link to='/'>
				<Button text='Выйти' />
			</Link>
		</ul>
	)
}