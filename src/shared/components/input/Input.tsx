import { useState } from "react";
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

	const [visible, setVisible] = useState(false)

	const onToggleVisible = () => {
		setVisible(!visible);
	}

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
					<button type='button' onClick={onToggleVisible}>
						{visible ? (
							<img src="/public/assets/hidden.png" alt="hidden" />
						) : (
							<img src="/public/assets/visible.svg" alt="visible" />
						)}
					</button>
				)}
			</div>
			{errors[name] && <div className={style.errors}>Ошибка ввода!</div>}
		</div>
	)
}