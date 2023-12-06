import { useSelector } from "react-redux"
import { useGetMyQuestionTabInfoQuery } from "shared/api/myQuestionTabApiInfo"
import style from './InterviewsWindowPage.module.scss'
import { FiSearch } from "react-icons/fi"
import { useEffect, useState } from "react"
import { Accordion, AccordionBody, AccordionTitle, Button } from "shared/components"
import { selectInitiatorId } from "shared/api/initiatorIdSlice"
import { HeaderInterviewsWindowPage } from "./components/InterviewsWindowPageHeader/InterviewsWindowPageHeader"
import { useSendFeedbackCreateMutation } from "./api/feedbackCreateApi"
import { IQuestion } from "shared/types/IQuestions"

export const InterviewsWindowPage = () => {
	// переделать стэйт добавления вопросов на редакс
	const [value, setValue] = useState<string>('')
	const [generalComment, setGegerealComment] = useState('')
	const id = useSelector(selectInitiatorId)
	const { data, isSuccess, isLoading, isError } = useGetMyQuestionTabInfoQuery(id)
	const [sendFeedbackCreate] = useSendFeedbackCreateMutation()
	const [questions, setQuestion] = useState<IQuestion[]>([])

	const addQuestion = (question: IQuestion) => {
		if (questions.some((q: any) => q.id === question.id)) {
			return
		}
		setQuestion((prevQuest => [...prevQuest, question]))
	}

	const sendFeedbackHandler = () => {

		const body = {
			oneToOneId: 0,
			authorId: id,
			recipientId: id,
			questions: data?.items.map((item) => {
				return {
					question: {
						id: 0,
						question: "string",
						answer: "string",
						technologyId: 0,
						userId: 0
					},
					responseLevel: 5,
					comment: "string",
				}
			}),
			message: generalComment,
		}
		// sendFeedbackCreate(body)
	}

	useEffect(() => {
		console.log(questions)
	}, [questions])

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
						<ul key={i} className={style.questionItem} onClick={() => addQuestion(item)}>
							<li className={style.stack}>{item.technology?.name}</li>
							<li>{item.question}</li>
						</ul>))}
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
									<textarea placeholder="Введите комментарий к ответу" className={style.textarea} ></textarea>
								</div>
							</AccordionBody>
						</Accordion>
					))}
					{isError && <p>Произошла ошибка</p>}
				</div>
				<div className={style.feedback}>
					<textarea onChange={(e) => setGegerealComment(e.target.value)} className={style.feedback__text} placeholder="Общий комментарий к собеседованию"></textarea>
					<Button onClick={sendFeedbackHandler} text="Сохранить и выйти" />
				</div>
			</div>
		</section >
	)
}

