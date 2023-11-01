import style from './Time.module.scss'

interface TimeProps {
	value: string,
	name: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Time = (props: TimeProps) => {
	const { value, onChange, name } = props

	return (
		<div className={style.time}>
			<label className={style.time__title}>Дата собеседования</label>
			<input type="time" value={value || ''} onChange={onChange} name={name} />
		</div >
	)
}