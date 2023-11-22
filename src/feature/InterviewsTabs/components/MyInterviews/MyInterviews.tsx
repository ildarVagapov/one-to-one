import { useSelector } from "react-redux"
import style from "./MyInterviews.module.scss"
import { useGetMyInterviewsTabInfoQuery } from "feature/InterviewsTabs/api/myInterviewsTabApi"
import { userId } from "shared/api/userIdSlice"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "shared/components"


export const MyInterviews = () => {
	const { data } = useGetMyInterviewsTabInfoQuery(useSelector(userId))
	const navigate = useNavigate()
	const filters = [
		{ id: 1, title: 'Дата, время' },
		{ id: 2, title: 'Стэк' },
		{ id: 3, title: 'Оппонент' },
		{ id: 5, title: 'Уровень' },
		{ id: 6, title: 'Фитбэк' },
		{ id: 7, title: 'Статус' },
	]

	const handleFeedback = () => {
		navigate('/feed-back')
	}

	return (
		<div className={style.interviews}>
			<div className={style.content}>
				{data?.items.map((item, i) => (
					<ul key={i} className={style.items}>
						<li>{item.dateTime}</li>
						<li>{item.technology.name}</li>
						<li>{item.level}</li>
						<Button type="border" text="Подробнее" disabled={item.initiatorFeedback === 'NO_WRITE'} onClick={handleFeedback} />
					</ul>
				))}
			</div>
		</div>
	)
}

