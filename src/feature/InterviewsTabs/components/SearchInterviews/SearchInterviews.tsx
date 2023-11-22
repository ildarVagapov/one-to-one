import { StatusButton } from "shared/components/Tabs/components/StatusButton/StatusButton"
import { useGetSearchInterviewsQuery } from "./api/searchInterviewsApi"
import style from './SearchInterviews.module.scss'
import { userId } from "shared/api/userIdSlice"
import { useSelector } from "react-redux"
import { Suspense } from "react"

export const SearchInterviews = () => {
	const { data } = useGetSearchInterviewsQuery()
	const id = useSelector(userId)

	return (
		<div className={style.search}>
			{/* <TabsFilter filters={filters} /> */}
			<Suspense fallback={<p>Loading...</p>}>
				<div className={style.content}>
					{data?.items.map((item, i) => (
						id !== item.initiatorId &&
						<ul key={i} className={style.items} >
							<li>{item.dateTime}</li>
							<li>{item.technology.name}</li>
							<li>{item.opponentId}</li>
							<li>{item.level}</li>
							<StatusButton text='Откликнуться' />
						</ul>
					))}
				</div >
			</Suspense>
		</div >
	)
}
