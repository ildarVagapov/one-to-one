import { FiAward, FiCalendar, FiDatabase, FiUser } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { Button } from 'shared/components'
import style from './HeaderFeedback.module.scss'

export const HeaderFeedback = () => {



	const dataFeedback = [
		{ id: 1, img: <FiCalendar />, label: '11.01.2023 10:00 MSK' },
		{ id: 2, img: <FiUser />, label: 'Артем Кашаков ' },
		{ id: 3, img: <FiDatabase />, label: ' html' },
		{ id: 4, img: <FiAward />, label: 'middle ' },
	]

	return (
		<ul className={style.header}>
			{dataFeedback.map((item, i) => (
				<li key={i}>
					<span>{item.img}</span>
					{item.label}
				</li>
			))}
			<Link to='/'>
				<Button text='Выйти' />
			</Link>
		</ul>
	)
}