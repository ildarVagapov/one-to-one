import style from './TabsFilter.module.scss'

export const TabsFilter = () => {

	<div className={style.interviews__filters}>
		{filters.map(filter => (
			<div className={style.interviews__filters_item}>
				{filter.title}
				<div className={style.interviews__filters_btn}>
					<button><img src="/public/assets/vector1.svg" alt="" /></button>
					<button><img src="/public/assets/vector2.svg" alt="" /></button>
				</div>
			</div>
		))}
	</div>
}