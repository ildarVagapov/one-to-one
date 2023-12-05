import { useSelector } from 'react-redux'
import style from './InterviewsWindowPageHeader.module.scss'
import { selectInitiatorDate, selectInitiatorName, selectInitiatorSurName } from 'shared/api/initiatorIdSlice'


export const HeaderInterviewsWindowPage = () => {
	const name = useSelector(selectInitiatorName)
	const date = useSelector(selectInitiatorDate)
	const surName = useSelector(selectInitiatorSurName)

	return <header className={style.header}>
		<div className={style.date}>{date}</div>
		<div className={style.name}>{`${name} ${surName}`}</div>
	</header>
}