import { useState } from "react";
import style from './Time.module.scss'

export const Time = () => {
	const [time, setTime] = useState('10:00');

	return (
		<div className={style.time}>
			<label className={style.time__title}>Дата собеседования</label>
			<input type="time" value={time} />
		</div >
	)
}