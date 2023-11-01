import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
	text: string,
	width: string,
	disabled: boolean
}

export const Button = (props: ButtonProps) => {
	const { text, width, disabled } = props

	const btnClass = classNames(
		styles.button, // Общий класс из модуля
		{
			[styles.disabled]: disabled, // Условный класс для состояния "disabled"
		}
	);

	const btnStyle = {
		width: width,
	}

	return (
		<>
			<button disabled={disabled} style={btnStyle} className={btnClass}>{text}</button >
		</>
	)
}