import { Link } from "react-router-dom"
import style from "./MyInterviews.module.scss"
import { TabsFilter } from "shared/components/Tabs/components/TabsFiter/TabsFilter"
import { StatusButton } from "shared/components/Tabs/components/StatusButton/StatusButton"
import { TabsButton } from "shared/components/Tabs/components/TabsButton/TabsButton"
import { TabsItem } from "shared/components/Tabs/components/TabsItem/TabsItem"


export const MyInterviews = () => {

	const filters = [
		{ id: 1, title: 'Дата, время' },
		{ id: 2, title: 'Стэк' },
		{ id: 3, title: 'Оппонент' },
		{ id: 5, title: 'Уровень' },
		{ id: 6, title: 'Фитбэк' },
		{ id: 7, title: 'Статус' },
	]
	const data = [
		{ id: 1, title: '03.02.2023 10:00 MSK' },
		{ id: 2, title: 'Python' },
		{ id: 3, title: 'Виктор Иванов' },
		{ id: 5, title: 'Middle' },
	]

	return (
		<div className={style.interviews}>
			<TabsFilter filters={filters} />
			<div className={style.content}>
				<TabsItem data={data} >
					<Link to='/feed-back' ><TabsButton text='Подробнее' /> </Link>
					<StatusButton text='Откликнуться' />
				</TabsItem>
			</div>
		</div>
	)
}

