import { useGetSearchInterviewsQuery } from "./api/searchInterviewsApi"
import style from './SearchInterviews.module.scss'
import { myId } from "shared/api/myIdSlice"
import { useSelector } from "react-redux"
import { Suspense } from "react"
import { SearchInterviewItem } from "./components/SearchInterviewsItem"


export const SearchInterviews = () => {
	const { data, isLoading } = useGetSearchInterviewsQuery();
	const id = useSelector(myId);

	return (
		<div className={style.search}>
			<Suspense fallback={isLoading && <p>Loading...</p>}>
				<div className={style.content}>
					{data?.items.filter(item => item.initiatorId !== id).map((item, i) => (
						<SearchInterviewItem key={i} item={item} myId={id} />
					))}
				</div>
			</Suspense>
		</div>
	)
}

