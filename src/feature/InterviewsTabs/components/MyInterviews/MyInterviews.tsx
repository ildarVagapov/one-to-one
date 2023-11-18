import { Link } from "react-router-dom"
import style from "./MyInterviews.module.scss"
import { TabsFilter } from "shared/components/Tabs/components/TabsFiter/TabsFilter"
import { StatusButton } from "shared/components/Tabs/components/StatusButton/StatusButton"
import { TabsButton } from "shared/components/Tabs/components/TabsButton/TabsButton"
import { useGetMyInterviewsTabInfoQuery } from "feature/InterviewsTabs/api/myInterviewsTabApi"
import { useGetUserIdQuery } from "shared/api/userApi"


export const MyInterviews = () => {
	const { data } = useGetMyInterviewsTabInfoQuery()
	const opponentId = data?.items.map(item => item.initiatorId)
	const { data: user } = useGetUserIdQuery(opponentId)

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
				{data?.items.map((item, i) => (
					<ul key={i} className={style.items}>
						<li>{item.dateTime}</li>
						<li>{item.technology.name}</li>
						<li>{item.opponentId}</li>
						<li>{item.level}</li>
						<li>{item.status}</li>
						<Link to='/feed-back' ><TabsButton text='Подробнее' /> </Link>
						<StatusButton text='Откликнуться' />
					</ul>
				))}
			</div>
		</div>
	)
}

