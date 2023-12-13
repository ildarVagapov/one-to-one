import { useGetMyQuestionTabInfoQuery } from "shared/api/myQuestionTabApiInfo"
import { useSelector } from "react-redux"
import { myId } from "shared/api/myIdSlice"
import style from './MyQuestion.module.scss'
import { Suspense } from "react"


export const MyQuestions = () => {
	const { data, isLoading, isSuccess, isError } = useGetMyQuestionTabInfoQuery(useSelector(myId))

	return (
		<div className={style.question}>
			<Suspense fallback={<p>loading</p>}>
				<div className={style.content}>
					{isLoading && <p>Загрузка...</p>}
					{isSuccess && data?.items.map((item, i) => (
						<ul key={i} className={style.items}>
							<li>{item.question}</li>
							<li>{item.technology?.name}</li>
						</ul>
					))}
					{isError && <p>Произошла ошибка при загрузке вопросов</p>}
				</div>
			</Suspense>
		</div >
	)
}

