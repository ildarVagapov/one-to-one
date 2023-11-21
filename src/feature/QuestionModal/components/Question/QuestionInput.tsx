import style from './QuestionInput.module.scss'

interface AnswerTypeProps {
	name: string,
	value: string,
	onChange: () => void
}

export const QuestionInput = (props: AnswerTypeProps) => {
	const { value, onChange, name } = props

	return (
		<textarea
			className={style.question}
			onChange={onChange}
			name={name}
			value={value || ''}
			placeholder="Вопрос"
		/>
	)
}