import { useState } from "react"
import style from "./Tabs.module.scss"
import { MyInterviews } from "./ui/MyInterviews/MyInterviews"
import { FiPlusCircle } from "react-icons/fi"

const SearchInterviews = () => {
	return (
		<div>поиск собесов</div>
	)
}
const MyQuestions = () => {
	return (
		<div>мои вопросы</div>
	)
}
const MyStatistics = () => {
	return (
		<div>моя статистика</div>
	)
}



export const Tabs = () => {

	const [idTabs, setIdTabs] = useState(1)

	const tabs = [
		{ id: 1, title: `Мои собеседования (0)`, addData: 'addData' },
		{ id: 2, title: 'Поиск собеседований' },
		{ id: 3, title: 'Мои вопросы (0)', addData: 'addData' },
		{ id: 4, title: 'Моя статистика' },
	]

	return (
		<div className={style.tabs}>
			<div className={style.tabsBtn}>
				{tabs.map(tab => (
					<button className={idTabs === tab.id ? `${style.active}` : ''} onClick={() => setIdTabs(tab.id)}>
						{tab.title}
						{tab.addData && <FiPlusCircle className={style.icon} />}
					</button>
				))}
			</div>
			<div className={style.tabsContainer}>
				{idTabs === 1 && < MyInterviews />}
				{idTabs === 2 && < SearchInterviews />}
				{idTabs === 3 && < MyQuestions />}
				{idTabs === 4 && < MyStatistics />}
			</div>
		</div>
	)
}