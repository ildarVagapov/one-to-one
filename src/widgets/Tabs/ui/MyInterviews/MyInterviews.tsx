import { Link } from "react-router-dom"
import style from "./MyInterviews.module.scss"

export const MyInterviews = () => {

	const filters = [
		{ id: 1, title: 'Дата, время' },
		{ id: 2, title: 'Стэк' },
		{ id: 3, title: 'Оппонент' },
		{ id: 4, title: 'Телеграм' },
		{ id: 5, title: 'Уровень' },
		{ id: 6, title: 'Фитбэк' },
		{ id: 7, title: 'Статус' },
	]

	return (
		<div className={style.interviews}>
			<div className={style.interviews__filters}>
				{filters.map(filter => (
					<div className={style.interviews__filters_item}>
						{filter.title}
						<div className={style.interviews__filters_btn}>
							<button><img src="/public/assets/vector1.svg" alt="" /></button>
							<button><img src="/public/assets/vector2.svg" alt="" /></button>
						</div>
					</div>
				))}
			</div>
			<div className={style.content}>
				<div className={style.content__items}>
					<div className={style.content__item}>03.02.2023 10:00 MSK</div>
					<div className={style.content__item}>Python</div>
					<div className={style.content__item}>Виктор Иванов</div>
					<div className={style.content__item}>nagibator</div>
					<div className={style.content__item}>Middle</div>
					<Link to='/feed-back' className={style.content__button}>Подробнее</Link>
					<button className={style.content__item}></button>
				</div>
			</div>
		</div>
	)
}