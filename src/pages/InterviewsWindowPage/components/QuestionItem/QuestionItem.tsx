import style from '../QuestionItem/QuestionItem.module.scss'
import { FiChevronRight, FiCheck } from "react-icons/fi"

interface QuestionProps {
	onClick: () => void
	technology: string
	answer: string
}

export const QuestionItem = (props: QuestionProps) => {
	const { onClick, technology, answer } = props

	return (
		<ul key={i} className={style.question} onClick={onClick}>
			<div>
				<li className={style.stack}>{technology}</li>
				<li>{answer}</li>
			</div>
			{questions.some((q) => q.question.id === item.id)
				? (<FiCheck className={style.checkIcon} />)
				: (<FiChevronRight className={style.rightIcon} />)
			}
		</ul>
	)
}