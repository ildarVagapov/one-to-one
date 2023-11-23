import { useSelector } from "react-redux"
import style from "./MyInterviews.module.scss"
import { useGetMyInterviewsTabInfoQuery } from "feature/InterviewsTabs/components/MyInterviews/api/myInterviewsTabApi"
import { userId } from "shared/api/userIdSlice"
import { Button } from "shared/components"
import { useNavigate } from "react-router-dom"
import { Status } from "./components/Status"


export const MyInterviews = () => {
	const { data } = useGetMyInterviewsTabInfoQuery(useSelector(userId))
	const navigate = useNavigate()

	return (
		<div className={style.interviews}>
			<div className={style.content}>
				{data?.items.map((item, i) => (
					<ul key={i} className={style.items}>
						<li>{item.dateTime}</li>
						<li>{item.technology.name}</li>
						<li>{item.level}</li>
						<Button type="border" text="Подробнее" disabled={item.initiatorFeedback === 'NO_WRITE'} onClick={() => navigate('/feed-back')} />
						<Status status={item.status} />
					</ul>
				))}
			</div>
		</div>
	)
}

