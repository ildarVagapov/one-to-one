import { useGetMyQuestionTabInfoQuery } from "feature/InterviewsTabs/api/myQuestionTabApiInfo"
import { useSelector } from "react-redux"
import { userId } from "shared/api/userIdSlice"
import { TabsFilter } from "shared/components/Tabs/components/TabsFiter/TabsFilter"
import style from './MyQuestion.module.scss'
import { useEffect, useState } from "react"

interface MyQuestionType {
	totalItems: number
	items: Item[]
}

interface Item {
	id: number
	question: string
	answer: string
	technology: Technology
	userId: number
}

interface Technology {
	id: number
	name: string
}

export const MyQuestions = () => {
	const { data } = useGetMyQuestionTabInfoQuery(useSelector(userId))
	const [question, setQuestion] = useState<MyQuestionType | null>(null);

	useEffect(() => {
		if (data) {
			setQuestion(data)
		}
		console.log(data, 'data изменилась')
	}, [data])

	const filters = [
		{ id: 1, title: 'Список вопросов' },
		{ id: 2, title: 'Стэк' },
	]


	return (
		<div className={style.question}>
			{/* <TabsFilter filters={filters} /> */}

			<ul className={style.filter}>
				{filters.map(filter => (
					<li>{filter.title}</li>
				))}
			</ul>
			<div className={style.content}>
				{question?.items.length === 0 ?
					<div>у вас пока не вопросов</div>
					:
					question?.items.map((item, i) => (
						<ul key={i} className={style.items}>
							<li>{item.question}</li>
							<li>{item.technology.name}</li>
						</ul>
					))}
			</div>
		</div>
	)
}

