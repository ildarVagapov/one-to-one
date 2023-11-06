import style from './TabsFilter.module.scss'
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

interface IFilter {
	id: number,
	title: string
}
interface TabsFilterProps {
	filters: IFilter[]
}

export const TabsFilter = (props: TabsFilterProps) => {
	const { filters } = props

	return (
		<div className={style.filters} >
			{
				filters.map(filter => (
					<div className={style.filters__items}>
						{filter.title}
						<div className={style.filters__item}>
							<IoCaretUp className={style.filters__btn1} />
							<IoCaretDown className={style.filters__btn2} />
						</div>
					</div>
				))
			}
		</div >
	)
}