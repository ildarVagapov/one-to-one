
import { FieldErrors } from 'react-hook-form';
import style from './Input.module.scss'

interface InputProps {
	label: string,
	type?: string,
	name: string,
	value: string,
	errors: FieldErrors,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {

	const { label, type, name, value, onChange, errors } = props;

	return (
		<div className={style.input}>
			<label >{label}</label>
			<input
				name={name}
				placeholder={label}
				value={value || ''}
				type={type}
				onChange={onChange}
			/>
			{errors[name] && <div className={style.errors}>Ошибка ввода!</div>}
		</div>
	)
}