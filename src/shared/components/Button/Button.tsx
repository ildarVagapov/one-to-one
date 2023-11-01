import style from './Button.module.scss'

interface ButtonProps {
	text: string,
	width: string,
	disabled: boolean
}

export const Button = (props: ButtonProps) => {
	const { text, width, disabled } = props

	const btnStyle = {
		width: width,
	}

	return (
		<button disabled={disabled} style={btnStyle} className={style.button}>{text}</button>
	)
}