import { Tabs } from "shared/components"
import { MyInterviews } from "./components/MyInterviews/MyInterviews"
import { MyStatistics } from "./components/MyStatistics/MyStatistics"
import { SearchInterviews } from "./components/SearchInterviews/SearchInterviews"
import { useGetMyInterviewsTabInfoQuery } from "./api/myInterviewsTabApi"
import { useGetMyQuestionTabInfoQuery } from "./api/myQuestionTabApiInfo"
import { useSelector } from "react-redux"
import { userId } from "shared/api/userIdSlice"
import { MyQuestions } from "./components/MyQuestion/MyQuestions"
import { StudiesInterviews } from "./components/StudiesInterviews/StudiesInterviews"
import { CompletedInterviews } from "./components/CompletedInterviews copy/CompletedInterviews"


export const InterviewsTabs = () => {
	const { data: dataInterviews } = useGetMyInterviewsTabInfoQuery(useSelector(userId))
	const { data: dataQuestion } = useGetMyQuestionTabInfoQuery(useSelector(userId))

	const tabs = [
		{ id: 1, title: `Мои собеседования (${dataInterviews?.totalItems})`, component: <MyInterviews />, popap: true },
		{ id: 2, title: `Пройденные (0)`, component: <CompletedInterviews />, },
		{ id: 3, title: `Проведенные (0)`, component: <StudiesInterviews /> },
		{ id: 4, title: `Мои вопросы (${dataQuestion?.totalItems})`, component: <MyQuestions />, popap: true },
		{ id: 5, title: 'Поиск собеседований', component: <SearchInterviews />, },
		{ id: 6, title: 'Моя статистика', component: <MyStatistics />, },
	]

	return (
		<>
			<Tabs tabs={tabs} />
		</>
	)
}