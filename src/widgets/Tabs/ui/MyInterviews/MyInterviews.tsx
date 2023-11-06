import { Link } from "react-router-dom"
import style from "./MyInterviews.module.scss"
import { TabsButton } from "widgets/Tabs/components/TabsButton/TabsButton"
import { StatusButton } from "widgets/Tabs/components/StatusButton/StatusButton"
import { TabsFilter } from "widgets/Tabs/components/TabsFiter/TabsFilter"

export const MyInterviews = () => {

	const filters = [
		{ id: 1, title: 'Дата, время' },
		{ id: 2, title: 'Стэк' },
		{ id: 3, title: 'Оппонент' },
		{ id: 5, title: 'Уровень' },
		{ id: 6, title: 'Фитбэк' },
		{ id: 7, title: 'Статус' },
	]

	return (
		<div className={style.interviews}>
			<TabsFilter filters={filters} />
			<div className={style.content}>
				<div className={style.content__items}>
					<div className={style.content__item}>03.02.2023 10:00 MSK</div>
					<div className={style.content__item}>Python</div>
					<div className={style.content__item}>Виктор Иванов</div>
					<div className={style.content__item}>Middle</div>
					<Link to='/feed-back' ><TabsButton text='Подробнее' /> </Link>
					<StatusButton text='Откликнуться' />
				</div>
			</div>
		</div>
	)
}