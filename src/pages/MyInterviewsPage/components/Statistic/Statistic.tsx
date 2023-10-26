import style from './Statistic.module.scss'
import { FiStar } from "react-icons/fi";

export const Statistic = () => {

	const data = [
		{
			title: 'Оценки пользователей',
			count: '4.4',
			icon: true,
		},
		{
			title: 'Пройдено собеседований',
			count: '3',
		},
		{
			title: 'Набрано баллов',
			count: '2',
		},
		{
			title: 'Задано вопросов',
			count: '2',
		},
	];

	return (
		<div className={style.statistic}>
			{data.map((item, index) => (
				<div key={index} className={style.statistic__items}>
					<div className={style.statistic__subtitle}>{item.title}</div>
					<div className={style.statistic__item}>
						<div className={style.statistic__title}>{item.count}</div>
						{item.icon && <FiStar className={style.statistic__icon} />}
					</div>
				</div>
			))}
		</div>
	)
}