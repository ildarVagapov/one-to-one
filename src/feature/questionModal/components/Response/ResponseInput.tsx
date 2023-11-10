import style from './ResponseInput.module.scss'

export const ResponseInput = () => {
	return (
		<textarea className={style.response} placeholder="Вопрос" />
	)
}