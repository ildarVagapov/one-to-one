
import style from './Input.module.scss'

interface InputProps {
	label: string,
	type?: string,
	placeholder: string,
}

export const Input = (props: InputProps) => {

	const { label, type, placeholder } = props;
	return (
		<div className={style.input}>
			<label >{label}</label>
			<input type={type || 'text'} placeholder={placeholder} />
		</div>
	)
}