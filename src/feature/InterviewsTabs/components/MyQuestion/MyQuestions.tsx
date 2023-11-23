import { useGetMyQuestionTabInfoQuery } from "feature/InterviewsTabs/api/myQuestionTabApiInfo"
import { useSelector } from "react-redux"
import { userId } from "shared/api/userIdSlice"
import style from './MyQuestion.module.scss'
import { Suspense, useEffect } from "react"


export const MyQuestions = () => {
	const { data, isLoading } = useGetMyQuestionTabInfoQuery(useSelector(userId))

	useEffect(() => {
		console.log(data, 'data изменилась')
	}, [data])


	return (
		<div className={style.question}>
			<Suspense fallback={isLoading && <p>загрузка</p>}>
				<div className={style.content}>
					{data?.items.map((item, i) => (
						<ul key={i} className={style.items}>
							<li>{item.question}</li>
							<li>{item.technology?.name}</li>
						</ul>
					))}
				</div>
			</Suspense>
		</div >
	)
}

