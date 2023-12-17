import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { selectInitiatorId } from "shared/api/initiatorIdSlice"
import { useGetMyQuestionTabInfoQuery } from "shared/api/myQuestionTabApiInfo"
import { Button } from "shared/components"
import style from './InterviewsWindowPage.module.scss'
import { useSendFeedbackCreateMutation } from "./api/feedbackCreateApi"
import { questionsInterviewsWindow } from "./api/setQuestionSlice"
import { HeaderInterviewsWindowPage } from "./components/InterviewsWindowPageHeader/InterviewsWindowPageHeader"
import { QuestionItem } from "./components/QuestionItem/QuestionItem"
import { QuestionWindowItem } from "./components/QuestionWindowItem/QuestionWindowItem"
import { acceptQuestion } from "./api/acceptQuestionSlice"


export const InterviewsWindowPage = () => {
	const id = useSelector(selectInitiatorId)
	const dispatch = useDispatch()
	const [value, setValue] = useState<string>('')
	const [generalComment, setGegeneralComment] = useState('')
	const { data, isSuccess, isLoading, isError } = useGetMyQuestionTabInfoQuery(id)
	const [sendFeedbackCreate] = useSendFeedbackCreateMutation()
	const questions = useSelector(questionsInterviewsWindow)
	const acceptQuestions = useSelector(acceptQuestion)

	const sendFeedbackHandler = () => {

		const body = {
			oneToOneId: 0,
			authorId: id,
			recipientId: id,
			questions: acceptQuestions.map((item) => {
				return {
					question: {
						id: item.question.id,
						question: item.question.question,
						answer: item.question.answer,
						technologyId: item.question.technologyId,
						userId: item.question.userId
					},
					responseLevel: 5,
					comment: item.comment,
				}
			}),
			message: generalComment,
		}
		// sendFeedbackCreate(body)
		console.log(body)
	}

	return (
		<section className={style.interview}>
			<div className={style.searchBar}>
				<div className={style.search}>
					<input type="text" placeholder="Поиск вопросов" value={value} onChange={(e) => setValue(e.target.value)} />
					<FiSearch className={style.searchIcon} />
				</div>
				<div className={style.searchItems}>
					{isLoading && <p>Загрузка...</p>}
					{isSuccess && data?.items.filter((item) => item.answer.toLowerCase().includes(value?.toLowerCase()) || item.technology?.name.toLowerCase().includes(value?.toLowerCase())).map((item, i) => (
						<QuestionItem key={i} item={item} />
					))}
					{isError && <p>Произошла ошибка</p>}
				</div>
			</div>
			<div className={style.content}>
				<HeaderInterviewsWindowPage />
				<div className={style.items}>
					{isLoading && <p>Загрузка...</p>}
					{questions.length === 0 ? <p>Добавьте вопрос из списка слева</p> : questions.map((item, i) => (
						<QuestionWindowItem
							key={i}
							id={item.id}
							answer={item.answer}
							question={item.question}
							stackId={item.technology?.id}
							stackName={item.technology?.name}
						/>
					))}
					{isError && <p>Произошла ошибка</p>}
				</div>
				<div className={style.feedback}>
					<textarea
						onChange={(e) => setGegeneralComment(e.target.value)}
						className={style.feedback__text} placeholder="Общий комментарий к собеседованию"
					>
					</textarea>
					<Button onClick={sendFeedbackHandler} text="Сохранить и выйти" />
				</div>
			</div>
		</section >
	)
}

