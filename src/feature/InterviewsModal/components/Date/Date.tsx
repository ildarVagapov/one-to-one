import { useState } from "react";
import style from './Date.module.scss'
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { FiCalendar } from 'react-icons/fi'

export const DatePick = () => {
	const [startDate, setStartDate] = useState();

	return (
		<div className={style.date}>
			<label>Дата собеседования</label>
			<input type="date" />
		</div >
		// <div className={style.date}>
		// 	<h3 className={style.date__title}>Дата собеседования</h3>
		// 	<div className={style.date__item}>
		// 		<FiCalendar className={style.date__icon} />
		// 		<DatePicker className={style.element} selected={startDate} onChange={(date) => date && setStartDate(date)} />
		// 	</div>
		// </div >
	)
}