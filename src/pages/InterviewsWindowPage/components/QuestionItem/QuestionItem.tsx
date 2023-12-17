import { useDispatch, useSelector } from 'react-redux'
import style from '../QuestionItem/QuestionItem.module.scss'
import { FiChevronRight, FiCheck } from "react-icons/fi"
import { questionsInterviewsWindow, setQuestion } from 'pages/InterviewsWindowPage/api/setQuestionSlice'
import { IQuestion } from 'shared/types/IQuestions'

interface QuestionProps {
	item: IQuestion
}

export const QuestionItem = (props: QuestionProps) => {
	const { item } = props
	const dispatch = useDispatch()
	const questions = useSelector(questionsInterviewsWindow)

	const addQuestion = (question: IQuestion) => {
		if (questions.some((q) => q.id === question.id)) {
			return
		}
		dispatch(setQuestion(question))
	}

	return (
		<ul className={style.question} onClick={() => addQuestion(item)}>
			<div>
				<li className={style.stack}>{item.technology?.name}</li>
				<li>{item.answer}</li>
			</div>

			{
				questions.some((q) => q.id === item.id)
					? <FiCheck className={style.checkIcon} />
					: <FiChevronRight className={style.rightIcon} />
			}

		</ul>
	)
}