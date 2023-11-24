import { useState } from "react";
import { FieldErrors } from 'react-hook-form';
import style from './Input.module.scss'
import { FiEyeOff, FiEye } from "react-icons/fi"


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
	const [visible, setVisible] = useState(false)

	return (
		<div className={style.input}>
			<label >{label}</label>
			<div className={style.block}>
				<input
					name={name}
					placeholder={label}
					value={value || ''}
					type={visible ? 'text' : type}
					onChange={onChange}
				/>
				{type === 'password' && (
					<button type='button' onClick={() => setVisible(!visible)}>
						{visible ? (
							<FiEye className={style.icon} />
						) : (
							<FiEyeOff className={style.icon} />
						)}
					</button>
				)}
			</div>
			{errors[name] && <div className={style.errors}>Ошибка ввода!</div>}
		</div>
	)
}