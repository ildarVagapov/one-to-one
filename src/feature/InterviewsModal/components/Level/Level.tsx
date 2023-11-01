import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { FiChevronDown } from "react-icons/fi"
import style from './Level.module.scss'
import { LevelData } from './model/types'

export const Level = () => {
	const [selected, setSelected] = useState('')
	const [query, setQuery] = useState('')

	const data = [
		{
			"id": 1,
			"name": "Junior"
		},
		{
			"id": 2,
			"name": "Middle"
		},
		{
			"id": 3,
			"name": "Senior"
		},
	]

	const filteredlevel =
		data
			? query === ''
				? data
				: data.filter((level) =>
					level.name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
				)
			: [];

	return (
		<>
			<div className={style.level}>
				<h3 className={style.level__title}>Уровень</h3>
				<div className={style.level__items}>
					<Combobox value={selected} onChange={setSelected}>
						<div className={style.level__item}>
							<Combobox.Input
								className={style.level__input}
								placeholder='выбрать'
								displayValue={(level: LevelData) => level.name}
								onChange={(event) => setQuery(event.target.value)}
							/>
							<Combobox.Button>
								<FiChevronDown className={style.level__btn} />
							</Combobox.Button>
						</div>
						<Combobox.Options className={style.level__options}>
							{filteredlevel.map((level) => (
								<Combobox.Option className={style.level__option} key={level.id} value={level}>
									{level.name}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Combobox >
				</div >
			</div >
		</>
	)
}
