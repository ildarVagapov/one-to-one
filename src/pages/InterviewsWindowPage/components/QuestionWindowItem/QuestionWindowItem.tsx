import { Accordion, AccordionBody, AccordionTitle, Button } from "shared/components"
import style from './QuestionWindowItem.module.scss'
import { useDispatch } from "react-redux"
import { removeQuestion } from "pages/InterviewsWindowPage/api/setQuestionSlice"
import { FiX } from "react-icons/fi"
import { useState } from "react"
import { addAcceptQuestions } from "pages/InterviewsWindowPage/api/acceptQuestionSlice"
import { useForm } from "react-hook-form"


interface QuestionWProps {
	stackName: string | undefined
	stackId: number | undefined
	id: number | undefined
	question: string
	answer: string
	userId: number
}

export const QuestionWindowItem = (props: QuestionWProps) => {
	const { formState: { isValid } } = useForm()
	const [comment, setComment] = useState('')
	const { stackName, stackId, id, question, answer, userId } = props
	const dispatch = useDispatch()

	const acceptQuestionHandler = () => {
		dispatch(
			addAcceptQuestions({
				question: {
					id: id,
					question: question,
					answer: answer,
					technologyId: stackId,
					userId: userId,
				},
				responseLevel: 5,
				comment: comment,
			}))
	}


	return (
		<Accordion>
			<AccordionTitle id={id}>
				<div className={style.item}>
					<FiX className={style.close} onClick={() => dispatch(removeQuestion(id))} />
					<p className={style.stack}>{stackName}</p>
					<p>{question}</p>
				</div>
				<div className={style.rating}>
					******
				</div>
			</AccordionTitle >
			<AccordionBody id={id}>
				<div className={style.body}>
					<p className={style.answer}>
						{answer}
					</p>
					<div className={style.feedbackItem}>
						<textarea onChange={(e) => setComment(e.target.value)} placeholder="Введите комментарий к ответу" className={style.textarea} ></textarea>
						<Button disabled={!isValid} onClick={acceptQuestionHandler} text="Подтвердить" />
					</div>
				</div>
			</AccordionBody>
		</Accordion>
	)
}