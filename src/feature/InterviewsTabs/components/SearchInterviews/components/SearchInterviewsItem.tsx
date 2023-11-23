import { IItem } from 'shared/types/IItems';
import { useRespondInterviewsMutation } from '../api/respondInterviewsApi';
import style from './SearchInterviewsItem.module.scss'

interface ISearchItemProps {
	item: IItem
	userId: number
}


export const SearchInterviewItem = (props: ISearchItemProps) => {
	const { item, userId } = props
	const [respondInterviews, { isLoading, isSuccess, isError }] = useRespondInterviewsMutation()


	return (
		<ul className={style.items}>
			<li>{item.dateTime}</li>
			<li>{item.technology.name}</li>
			<li>{item.opponentId}</li>
			<li>{item.level}</li>
			<button
				className={style.btn}
				onClick={() => respondInterviews({
					opponentId: userId,
					oneToOneId: item.id,
				})}
				disabled={isLoading || isSuccess || isError}
			>
				{isLoading && 'Заявка отправляется...'}
				{isSuccess && 'Заявка отправлена'}
				{isError && 'Ошибка при отправке'}
				{!isLoading && !isSuccess && !isError && 'Откликнуться'}
			</button>
		</ul>
	);
};
