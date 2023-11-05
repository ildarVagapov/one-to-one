import style from './Date.module.scss'

interface DateProps {
	value: string,
	name: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DatePicker = (props: DateProps) => {
	const { name, value, onChange } = props;

	return (
		<div className={style.date}>
			<label>Дата собеседования</label>
			<input
				type="date"
				value={value || ''}
				name={name}
				onChange={onChange}
			/>
		</div >
	)
}