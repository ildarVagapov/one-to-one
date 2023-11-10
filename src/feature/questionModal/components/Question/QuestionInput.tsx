import style from './QuestionInput.module.scss'

export const QuestionInput = () => {
	return (
		<textarea className={style.question} placeholder="Ответ" />
	)
}