import { Tabs } from "shared/components"
import { MyInterviews } from "./components/MyInterviews/MyInterviews"
import { MyStatistics } from "./components/MyStatistics/MyStatistics"
import { MyQuestions } from "./components/MyQuestions/MyQuestions"
import { SearchInterviews } from "./components/SearchInterviews/SearchInterviews"
import { useGetMyInterviewsTabInfoQuery } from "./api/myInterviewsTabApi"
import { useGetMyQuestionTabInfoQuery } from "./api/myQuestionTabApiInfo"
import { useSelector } from "react-redux"
import { userId } from "shared/api/userIdSlice"


export const InterviewsTabs = () => {
	const { data: dataInterviews } = useGetMyInterviewsTabInfoQuery()
	const { data: dataQuestion } = useGetMyQuestionTabInfoQuery(useSelector(userId))

	const tabs = [
		{ id: 1, title: `Мои собеседования (${dataInterviews?.totalItems})`, component: <MyInterviews />, popap: true },
		{ id: 2, title: 'Поиск собеседований', component: <SearchInterviews />, },
		{ id: 3, title: `Мои вопросы (${dataQuestion?.totalItems})`, component: <MyQuestions />, popap: true },
		{ id: 4, title: 'Моя статистика', component: <MyStatistics />, },
	]

	return (
		<>
			<Tabs tabs={tabs} />
		</>
	)
}