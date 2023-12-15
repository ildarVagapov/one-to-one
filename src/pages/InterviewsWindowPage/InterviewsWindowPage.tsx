import { useDispatch, useSelector } from "react-redux"
import { useGetMyQuestionTabInfoQuery } from "shared/api/myQuestionTabApiInfo"
import style from './InterviewsWindowPage.module.scss'
import { FiSearch, FiX, } from "react-icons/fi"
import { useState } from "react"
import { Accordion, AccordionBody, AccordionTitle, Button } from "shared/components"
import { selectInitiatorId } from "shared/api/initiatorIdSlice"
import { HeaderInterviewsWindowPage } from "./components/InterviewsWindowPageHeader/InterviewsWindowPageHeader"
import { useSendFeedbackCreateMutation } from "./api/feedbackCreateApi"
import { QuestionItem } from "./components/QuestionItem/QuestionItem"
import { questionsInterviewsWindow, removeQuestion } from "./api/setQuestionSlice"


export const InterviewsWindowPage = () => {
	const [value, setValue] = useState<string>('')
	const [comment, setComment] = useState('')
	const [generalComment, setGegeneralComment] = useState('')
	const id = useSelector(selectInitiatorId)
	const { data, isSuccess, isLoading, isError } = useGetMyQuestionTabInfoQuery(id)
	const [sendFeedbackCreate] = useSendFeedbackCreateMutation()
	const questions = useSelector(questionsInterviewsWindow)
	const dispatch = useDispatch()

	const sendFeedbackHandler = () => {

		// const body = {
		// 	oneToOneId: 0,
		// 	authorId: id,
		// 	recipientId: id,
		// 	questions: questions.map((item) => {
		// 		return {
		// 			question: {
		// 				id: item.question.id,
		// 				question: item.question.question,
		// 				answer: item.question.answer,
		// 				technologyId: item.question.technologyId,
		// 				userId: item.question.userId
		// 			},
		// 			responseLevel: 5,
		// 			comment: item.comment,
		// 		}
		// 	}),
		// 	message: generalComment,
		// }
		// sendFeedbackCreate(body)
		// console.log(body)
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
						<Accordion key={i}>
							<AccordionTitle id={item.id}>
								<div className={style.item}>
									<FiX className={style.iconX} onClick={() => dispatch(removeQuestion(item.id))} />
									<p className={style.stack}>{item.technology?.name}</p>
									<p>{item.question}</p>
								</div>
								<div className={style.rating}>
									******
								</div>
							</AccordionTitle >
							<AccordionBody id={item.id}>
								<div className={style.body}>
									<p className={style.answer}>
										{item.answer}
									</p>
									<div className={style.feedbackItem}>
										<textarea onChange={(e) => setComment(e.target.value)} placeholder="Введите комментарий к ответу" className={style.textarea} ></textarea>
										<Button text="Подтвердить" />
									</div>
								</div>
							</AccordionBody>
						</Accordion>
					))}
					{isError && <p>Произошла ошибка</p>}
				</div>
				<div className={style.feedback}>
					<textarea onChange={(e) => setGegeneralComment(e.target.value)} className={style.feedback__text} placeholder="Общий комментарий к собеседованию"></textarea>
					<Button onClick={sendFeedbackHandler} text="Сохранить и выйти" />
				</div>
			</div>
		</section >
	)
}

