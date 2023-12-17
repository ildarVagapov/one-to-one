import { Accordion, AccordionBody, AccordionTitle, Button } from "shared/components"
import style from './QuestionWindowItem.module.scss'
import { useDispatch } from "react-redux"
import { removeQuestion } from "pages/InterviewsWindowPage/api/setQuestionSlice"
import { FiX } from "react-icons/fi"
import { useState } from "react"


interface QuestionWProps {
	stackName: string | undefined
	stackId: number | undefined
	id: number | undefined
	question: string
	answer: string
}

export const QuestionWindowItem = (props: QuestionWProps) => {
	const { stackName, stackId, id, question, answer } = props
	const [comment, setComment] = useState('')
	const dispatch = useDispatch()

	return (
		<Accordion>
			<AccordionTitle id={id}>
				<div className={style.item}>
					<FiX className={style.iconX} onClick={() => dispatch(removeQuestion(id))} />
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
						<Button onClick={() => 'void'} text="Подтвердить" />
					</div>
				</div>
			</AccordionBody>
		</Accordion>
	)
}