import { StatusButton } from "shared/components/Tabs/components/StatusButton/StatusButton"
import { useGetSearchInterviewsQuery } from "./api/searchInterviewsApi"
import style from './SearchInterviews.module.scss'

export const SearchInterviews = () => {
	const { data } = useGetSearchInterviewsQuery()

	return (
		<div className={style.search}>
			{/* <TabsFilter filters={filters} /> */}
			<div className={style.content}>
				{data?.items.map((item, i) => (
					<ul key={i} className={style.items}>
						<li>{item.dateTime}</li>
						<li>{item.technology.name}</li>
						<li>{item.opponentId}</li>
						<li>{item.level}</li>
						<StatusButton text='Откликнуться' />
					</ul>
				))}
			</div>
		</div>
	)
}