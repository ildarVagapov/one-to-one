import style from './Answer.module.scss'

interface AnswerTypeProps {
	name: string,
	value: string,
	onChange: () => void
}

export const Answer = (props: AnswerTypeProps) => {
	const { value, onChange, name } = props

	return (
		<textarea
			className={style.answer}
			onChange={onChange}
			name={name}
			value={value || ''}
			placeholder="Ответ"
		/>
	)
}