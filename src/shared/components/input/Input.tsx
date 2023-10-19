
import style from './Input.module.scss'

interface InputProps {
	label: string,
	type?: string,
	name: string,
	value: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {

	const { label, type, name, value, onChange } = props;

	return (
		<div className={style.input}>
			<label >{label}</label>
			<input
				name={name}
				value={value}
				onChange={onChange}
				type={type || 'text'}
				placeholder={label}
			/>
		</div>
	)
}