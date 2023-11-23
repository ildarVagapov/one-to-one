import { useGetSearchInterviewsQuery } from "./api/searchInterviewsApi"
import style from './SearchInterviews.module.scss'
import { userId } from "shared/api/userIdSlice"
import { useSelector } from "react-redux"
import { Suspense } from "react"
import { SearchInterviewItem } from "./components/SearchInterviewsItem"


export const SearchInterviews = () => {
	const { data, isLoading } = useGetSearchInterviewsQuery();
	const id = useSelector(userId);

	return (
		<div className={style.search}>
			<Suspense fallback={isLoading && <p>Loading...</p>}>
				<div className={style.content}>
					{data?.items.map((item, i) => (
						id !== item.initiatorId && (
							<SearchInterviewItem key={i} item={item} userId={id} />
						)
					))}
				</div>
			</Suspense>
		</div>
	);
};

